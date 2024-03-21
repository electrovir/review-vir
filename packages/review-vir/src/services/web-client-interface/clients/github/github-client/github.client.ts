import {MaybePromise, ensureError, mergeDeep} from '@augment-vir/common';
import {
    AnyDuration,
    DurationUnit,
    calculateRelativeDate,
    convertDuration,
    createFullDateInUserTimezone,
    getNowInUserTimezone,
    isDateAfter,
} from 'date-vir';
import {defineClient} from 'generic-client-interface';
import localForage from 'localforage-esm';
import {defineShape, isValidShape} from 'object-shape-tester';
import {isJsonEqual, isPromise} from 'run-time-assertions';
import {PartialDeep} from 'type-fest';
import {AuthToken} from '../../../../../data/auth-tokens';
import {GitData, gitDataShape} from '../../../../../data/git/git-data';
import {
    ErrorEvent,
    GitDataChangeEvent,
    GitDataResolveEvent,
    GitUpdateStartEvent,
} from '../../../git-client/git-client-events';
import {AutoUpdatingGitClient, GitClient} from '../../../git-client/git-service-client';
import {fetchGithubData} from './fetch-github-data';

export type GithubClientOptions = {
    updateInterval: AnyDuration;
    cacheTimeout: AnyDuration;
};

const defaultGithubClientOptions: GithubClientOptions = {
    updateInterval: {
        seconds: 10,
    },
    cacheTimeout: {
        minutes: 5,
    },
};

const cacheDataShape = defineShape(
    {
        timestamp: 0,
        data: gitDataShape,
    },
    true,
);
type CacheData = typeof cacheDataShape.runTimeType;

export class GithubClient extends AutoUpdatingGitClient {
    public static cacheStore = localForage.createInstance({
        description: 'github client cache for review-vir',
        name: 'review-vir-github-cache',
        storeName: 'review-vir-github-cache',
    });
    public static cacheKey = 'value';

    public value!: MaybePromise<GitData>;
    public lastResolvedValue: GitData | undefined = undefined;
    public options = defaultGithubClientOptions;

    constructor(
        public authTokens: ReadonlyArray<Readonly<AuthToken>>,
        optionsOverride?: PartialDeep<GithubClientOptions> | undefined,
    ) {
        super();
        if (optionsOverride) {
            this.overrideOptions(optionsOverride);
        }

        this.setPromiseValue(this.loadCachedValue());
        this.scheduleFutureUpdate();
    }

    private async saveCache(newValue: GitData): Promise<void> {
        await GithubClient.cacheStore.setItem<any>(GithubClient.cacheKey, {
            timestamp: Date.now(),
            data: newValue,
        });
    }

    private async loadCachedValue(): Promise<GitData> {
        const cachedData = await GithubClient.cacheStore.getItem<CacheData>(GithubClient.cacheKey);
        if (isValidShape(cachedData, cacheDataShape)) {
            if (
                isDateAfter({
                    fullDate: getNowInUserTimezone(),
                    relativeTo: calculateRelativeDate(
                        createFullDateInUserTimezone(cachedData.timestamp),
                        this.options.cacheTimeout,
                    ),
                })
            ) {
                this.setUpdatedValue(true);
            } else {
                setTimeout(() => this.setUpdatedValue(true));
            }

            return cachedData.data;
        }

        return this.fetchData();
    }

    private setPromiseValue(newPromise: Promise<GitData>) {
        this.dispatch(new GitUpdateStartEvent({detail: newPromise}));
        this.value = newPromise;
        newPromise
            .then((newResolvedValue) => {
                this.dispatch(new GitDataResolveEvent({detail: newResolvedValue}));
                this.value = newResolvedValue;

                if (!isJsonEqual(this.lastResolvedValue, newResolvedValue)) {
                    this.dispatch(new GitDataChangeEvent({detail: newResolvedValue}));
                    this.lastResolvedValue = newResolvedValue;
                    this.saveCache(newResolvedValue);
                }
            })
            .catch((reason) => {
                this.dispatch(new ErrorEvent({detail: ensureError(reason)}));
            });
    }

    public overrideOptions(optionsOverride: PartialDeep<GithubClientOptions>) {
        if (!optionsOverride) {
            return;
        }
        this.options = mergeDeep<GithubClientOptions>(this.options, optionsOverride);
    }

    protected async fetchData() {
        return await fetchGithubData(this.authTokens);
    }

    private scheduleFutureUpdate() {
        globalThis.setTimeout(() => {
            this.setUpdatedValue(false);
        }, convertDuration(this.options.updateInterval, DurationUnit.Milliseconds).milliseconds);
    }

    private async setUpdatedValue(forceUpdate: boolean) {
        this.scheduleFutureUpdate();
        if (!forceUpdate && isPromise(this.value)) {
            return this.value;
        }

        const updatedValuePromise = this.fetchData();

        this.setPromiseValue(updatedValuePromise);

        return await updatedValuePromise;
    }
}

export const githubClient = defineClient<GitClient>({
    init(authTokens: ReadonlyArray<Readonly<AuthToken>>) {
        return new GithubClient(authTokens);
    },
});
