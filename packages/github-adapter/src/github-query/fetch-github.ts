import {assert} from '@augment-vir/assert';
import {extractErrorMessage, log} from '@augment-vir/common';
import type {AuthToken} from '@review-vir/adapter-core';
import {assertValidShape} from 'object-shape-tester';
import {sum} from '../augments/sum.js';
import {githubGraphqlErrorShape, githubSearchQuery, type GithubSearch} from './graphql-query.js';

function createGithubGraphqlQuery(cursor: string | undefined): {
    query: string;
    variables: Record<string, string | null>;
} {
    return {
        query: githubSearchQuery,
        variables: {
            afterCursor: cursor || null,
        },
    };
}

export async function fetchGithubPullRequests(
    authToken: Readonly<AuthToken>,
    /** This is an input so it can be mocked. */
    fetch: typeof globalThis.fetch = globalThis.fetch,
): Promise<GithubSearch['data']> {
    try {
        let cursor: string | undefined;

        const paginatedResponses: Readonly<GithubSearch>[] = [];

        do {
            const queryBody = createGithubGraphqlQuery(cursor);

            const rawResponse = await fetch('https://api.github.com/graphql', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `bearer ${authToken.authTokenSecret}`,
                },
                body: JSON.stringify(queryBody),
            });
            if (!rawResponse.ok) {
                throw new Error(
                    `GitHub API fetch failed: ${rawResponse.status}, ${rawResponse.statusText}`,
                );
            }
            const responseJson = (await rawResponse.json()) as Readonly<GithubSearch>;

            if (responseJson.errors) {
                responseJson.errors.forEach((error: unknown) => {
                    assertValidShape(error, githubGraphqlErrorShape);
                    log.error(error);
                });
                throw new Error('Failed to fetch GitHub pull requests. See console for details.');
            }

            // assertValidShape(responseJson, githubSearchShape);

            cursor = responseJson.data.search.pageInfo.hasNextPage
                ? responseJson.data.search.pageInfo.endCursor || undefined
                : undefined;
            paginatedResponses.push(responseJson);
            if (responseJson.data.search.issueCount > 1000) {
                throw new Error(
                    `Search too broad: got '${responseJson.data.search.issueCount}' items.`,
                );
            }
        } while (cursor);

        return combineResponseData(paginatedResponses);
    } catch (error) {
        log.error(
            `Failed to fetch data for token '${authToken.authTokenName}': ${extractErrorMessage(error)}`,
        );
        throw error;
    }
}

function combineResponseData(
    responses: ReadonlyArray<Readonly<GithubSearch>>,
): GithubSearch['data'] {
    const lastResponse = responses[responses.length - 1];

    assert.isDefined(lastResponse);

    return {
        rateLimit: {
            ...lastResponse.data.rateLimit,
            cost: responses.map((response) => response.data.rateLimit.cost).reduce(sum),
            nodeCount: responses.map((response) => response.data.rateLimit.nodeCount).reduce(sum),
        },
        viewer: lastResponse.data.viewer,
        search: {
            issueCount: lastResponse.data.search.issueCount,
            pageInfo: lastResponse.data.search.pageInfo,
            nodes: responses.flatMap((response) => response.data.search.nodes),
        },
    };
}
