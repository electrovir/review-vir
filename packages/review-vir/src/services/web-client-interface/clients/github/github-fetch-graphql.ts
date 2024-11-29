import {check} from '@augment-vir/assert';
import {ensureErrorAndPrependMessage} from '@augment-vir/common';
import {assertValidShape} from 'object-shape-tester';
import {AuthToken} from '../../../../../../adapter-core/src/auth-store/auth-tokens.js';
import {githubGraphqlErrorShape} from './github-graphql-queries/github-graphql-error.js';
import {
    GithubGraphqlQueryType,
    GithubGraphqlResponse,
    GithubGraphqlSearchQuery,
    GithubQueryOptions,
    createGithubGraphqlQuery,
    githubGraphqlResponseShapes,
    paginationCombinators,
    paginationInfoGetters,
} from './github-graphql-queries/github-graphql-queries.js';

export async function fetchGithubGraphql<QueryType extends GithubGraphqlQueryType>(
    queryType: QueryType,
    searchQuery: GithubGraphqlSearchQuery,
    queryOptions: GithubQueryOptions,
    authToken: AuthToken,
): Promise<GithubGraphqlResponse<QueryType> | Error> {
    try {
        let cursor: string | undefined;

        const paginatedResponses: any[] = [];

        do {
            const queryBody = createGithubGraphqlQuery(
                queryType,
                searchQuery,
                queryOptions,
                cursor,
            );
            const rawResponse = await fetch('https://api.github.com/graphql', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `bearer ${authToken.authTokenSecret}`,
                },
                body: JSON.stringify(queryBody),
            });
            const response = await rawResponse.json();
            response.authTokenName = authToken.authTokenName;

            if (response.errors) {
                response.errors.forEach((responseError: any) => {
                    assertValidShape(responseError, githubGraphqlErrorShape);
                });
            }

            try {
                assertValidShape(response, githubGraphqlResponseShapes[queryType]);
            } catch (error) {
                console.info(response);
                throw error;
            }

            const paginationInfo = paginationInfoGetters[queryType](response);
            cursor = paginationInfo.nextPageCursor;
            paginatedResponses.push(response);
            if (paginationInfo.totalItemCount > 1000) {
                throw new Error(`Search too broad: got '${paginationInfo.totalItemCount}' items.`);
            }
        } while (cursor);

        if (!check.isLengthAtLeast(paginatedResponses, 1)) {
            throw new Error('No data received from GitHub.');
        }

        return paginationCombinators[queryType](paginatedResponses);
    } catch (caught) {
        const error = ensureErrorAndPrependMessage(
            caught,
            `Failed to fetch data for token '${authToken.authTokenName}'.`,
        );
        console.error(error);
        return error;
    }
}
