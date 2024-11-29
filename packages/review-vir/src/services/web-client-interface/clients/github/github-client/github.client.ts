import {check} from '@augment-vir/assert';
import {MaybePromise, ensureError, mergeDeep} from '@augment-vir/common';
import {
    AnyDuration,
    calculateRelativeDate,
    convertDuration,
    createFullDateInUserTimezone,
    getNowInUserTimezone,
    isDateAfter,
} from 'date-vir';
import {defineClient} from 'generic-client-interface';
import localForage from 'localforage-esm';
import {defineShape, isValidShape} from 'object-shape-tester';
import {PartialDeep} from 'type-fest';
import {AuthToken} from '../../../../../../../adapter-core/src/auth-store/auth-tokens.js';
import {GitData, gitDataShape} from '../../../../../data/git/git-data.js';
import {
    ErrorEvent,
    GitDataChangeEvent,
    GitDataResolveEvent,
    GitUpdateStartEvent,
} from '../../../git-client/git-client-events.js';
import {AutoUpdatingGitClient, GitClient} from '../../../git-client/git-service-client.js';
import {fetchGithubData} from './fetch-github-data.js';

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
type CacheData = typeof cacheDataShape.runtimeType;

export class GithubClient extends AutoUpdatingGitClient {
    public static readonly cacheStore = localForage.createInstance({
        description: 'github client cache for review-vir',
        name: 'review-vir-github-cache',
        storeName: 'review-vir-github-cache',
    });
    public static readonly cacheKey = 'value';

    public value!: MaybePromise<GitData | undefined>;
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

        // eslint-disable-next-line sonarjs/no-async-constructor
        this.setPromiseValue(this.loadCachedValue());
        this.scheduleFutureUpdate();
    }

    private async saveCache(newValue: GitData): Promise<void> {
        await GithubClient.cacheStore.setItem<any>(GithubClient.cacheKey, {
            timestamp: Date.now(),
            data: newValue,
        });
    }

    private async loadCachedValue(): Promise<GitData | undefined> {
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
                void this.setUpdatedValue(true);
            } else {
                setTimeout(() => this.setUpdatedValue(true));
            }

            return cachedData.data;
        }

        return this.fetchData();
    }

    private setPromiseValue(newPromise: Promise<GitData | undefined>) {
        this.dispatch(new GitUpdateStartEvent({detail: newPromise}));
        this.value = newPromise;
        newPromise
            .then((newResolvedValue) => {
                if (!newResolvedValue) {
                    return;
                }

                this.dispatch(new GitDataResolveEvent({detail: newResolvedValue}));
                this.value = newResolvedValue;

                if (!check.jsonEquals(this.lastResolvedValue, newResolvedValue)) {
                    this.dispatch(new GitDataChangeEvent({detail: newResolvedValue}));
                    this.lastResolvedValue = newResolvedValue;
                    void this.saveCache(newResolvedValue);
                }
            })
            .catch((reason: unknown) => {
                this.dispatch(new ErrorEvent({detail: ensureError(reason)}));
            });
    }

    public overrideOptions(optionsOverride: PartialDeep<GithubClientOptions>) {
        this.options = mergeDeep<GithubClientOptions>(this.options, optionsOverride);
    }

    protected async fetchData() {
        return await fetchGithubData(this.authTokens);
    }

    private scheduleFutureUpdate() {
        globalThis.setTimeout(
            async () => {
                await this.setUpdatedValue(false);
            },
            convertDuration(this.options.updateInterval, {milliseconds: true}).milliseconds,
        );
    }

    private async setUpdatedValue(forceUpdate: boolean) {
        this.scheduleFutureUpdate();
        if (!forceUpdate && check.isPromise(this.value)) {
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
