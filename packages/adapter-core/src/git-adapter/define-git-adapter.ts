import {FetchGitDataFunction, GitAdapter} from './git-adapter.js';

export type GitAdapterDefinitionParameters = {
    /**
     * The name of the service that this adapter will connect to.
     *
     * @example 'github'
     */
    serviceName: string;
    /** This is the function that fetches data from the service that this adapter is connecting to. */
    fetchGitData: FetchGitDataFunction;
};

export type GitAdapterDefinition = (new (
    /** Used to load auth tokens. */
    secretEncryptionKey: string,
    /**
     * Max query cost for fetches. If a fetch exceeds this max then automatic fetching will disable
     * itself.
     */
    queryCostMax: number,
) => GitAdapter) & {
    readonly serviceName: string;
};

export function defineGitAdapter({
    fetchGitData,
    serviceName,
}: GitAdapterDefinitionParameters): GitAdapterDefinition {
    return class extends GitAdapter {
        public static readonly serviceName = serviceName;
        constructor(
            ...[
                secretEncryptionKey,
                queryCostMax,
            ]: ConstructorParameters<GitAdapterDefinition>
        ) {
            super(serviceName, fetchGitData, queryCostMax, secretEncryptionKey);
        }
    } as GitAdapterDefinition;
}
