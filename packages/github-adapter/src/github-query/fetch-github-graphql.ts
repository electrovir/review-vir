import {extractErrorMessage, log, type AnyObject} from '@augment-vir/common';
import type {AuthToken} from '@review-vir/adapter-core';
import {assertValidShape, type ShapeDefinition} from 'object-shape-tester';
import type {Primitive} from 'type-fest';
import {githubGraphqlErrorShape} from './graphql-query.js';

export async function fetchGithubGraphql<Shape extends ShapeDefinition<any, boolean>>(
    authToken: Readonly<AuthToken>,
    createQuery: (cursor: string | null) => {query: string; variables?: Record<string, Primitive>},
    responseShape: Shape,
    getPageInfo?: (data: Shape['runtimeType']) => {endCursor: string | null; hasNextPage: boolean},
    /** This is an input so it can be mocked. */
    fetch: typeof globalThis.fetch = globalThis.fetch,
): Promise<Shape['runtimeType'][]> {
    try {
        let nextPageCursor: null | string = null;

        const responses: Shape['runtimeType'][] = [];

        do {
            const queryBody = createQuery(nextPageCursor || null);

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
            const responseJson: AnyObject = await rawResponse.json();

            if (responseJson.errors) {
                responseJson.errors.forEach((error: unknown) => {
                    assertValidShape(error, githubGraphqlErrorShape);
                    log.error(error);
                });
                throw new Error('Failed to fetch GitHub pull requests. See console for details.');
            }

            const data = responseJson.data;

            assertValidShape(data, responseShape);

            const {endCursor, hasNextPage} = getPageInfo
                ? getPageInfo(data)
                : {endCursor: null, hasNextPage: false};

            nextPageCursor = hasNextPage ? endCursor : null;
            responses.push(data);
        } while (nextPageCursor);

        return responses;
    } catch (error) {
        log.error(
            `Failed to fetch data for token '${authToken.authTokenName}': ${extractErrorMessage(error)}`,
        );
        throw error;
    }
}
