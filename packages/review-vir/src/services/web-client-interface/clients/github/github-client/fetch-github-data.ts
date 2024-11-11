import {assert} from '@augment-vir/assert';
import {ensureError, randomString, typedObjectFromEntries} from '@augment-vir/common';
import {isDateAfter} from 'date-vir';
import {isAsyncError} from 'element-vir';
import {AuthToken} from '../../../../../data/auth-tokens.js';
import {GitData} from '../../../../../data/git/git-data.js';
import {PullRequest} from '../../../../../data/git/pull-request.js';
import {User} from '../../../../../data/git/user.js';
import {fetchGithubGraphql} from '../github-fetch-graphql.js';
import {
    GithubGraphqlQueryType,
    GithubGraphqlSearchQuery,
} from '../github-graphql-queries/github-graphql-queries.js';
import {parseGithubSearchPullRequest, parseGithubUser} from './parse-github-data.js';

let costTooHigh = false;

export async function fetchGithubData(
    authTokens: ReadonlyArray<Readonly<AuthToken>>,
): Promise<GitData | undefined> {
    if (costTooHigh) {
        return undefined;
    }
    const authTokenSettledResponses = await Promise.allSettled(
        authTokens.flatMap((authToken) => {
            return [
                fetchGithubGraphql(
                    GithubGraphqlQueryType.PullRequest,
                    GithubGraphqlSearchQuery.OpenPullRequests,
                    {filter: {onlyMyself: true}},
                    authToken,
                ),
                fetchGithubGraphql(
                    GithubGraphqlQueryType.PullRequest,
                    GithubGraphqlSearchQuery.ClosedPullRequests,
                    {filter: {onlyMyself: true}},
                    authToken,
                ),
            ];
        }),
    );

    let user: Readonly<User> | undefined;

    const parsedPullRequests: ReadonlyArray<Readonly<PullRequest> | Error> =
        authTokenSettledResponses.flatMap(
            (settledResponse): ReadonlyArray<Readonly<PullRequest> | Error> => {
                if (settledResponse.status === 'fulfilled') {
                    const value = settledResponse.value;

                    if (isAsyncError(value)) {
                        return [value];
                    } else if (value.data.rateLimit.cost > 1) {
                        costTooHigh = true;
                        console.warn(
                            `GraphQL query cost is too high (${value.data.rateLimit.cost}). Live updates will not happen.`,
                        );
                    }

                    if (!user) {
                        user = parseGithubUser(value.data.viewer);
                    }
                    return value.data.search.nodes.map((rawPullRequest) => {
                        assert.isDefined(user);

                        return parseGithubSearchPullRequest(
                            value.authTokenName,
                            rawPullRequest,
                            user,
                            value.data.rateLimit,
                        );
                    });
                } else {
                    return [ensureError(settledResponse.reason)];
                }
            },
        );

    /** Remove duplicates by PR id */
    const pullRequestMap = typedObjectFromEntries(
        parsedPullRequests.map((parsedPullRequest): [string, Error | PullRequest] => {
            if (parsedPullRequest instanceof Error) {
                return [
                    randomString(32),
                    parsedPullRequest,
                ];
            }
            return [
                parsedPullRequest.id.prId,
                parsedPullRequest,
            ];
        }),
    );

    const pullRequests = Object.values(pullRequestMap).sort((a, b) => {
        if (a instanceof Error && b instanceof Error) {
            const nameSort = a.name.localeCompare(b.name);
            if (nameSort) {
                return nameSort;
            } else {
                return a.message.localeCompare(b.message);
            }
        } else if (a instanceof Error) {
            return -1;
        } else if (b instanceof Error) {
            return 1;
        } else {
            return isDateAfter({
                fullDate: a.dates.created,
                relativeTo: b.dates.created,
            })
                ? 1
                : -1;
        }
    });

    if (!user) {
        throw new Error('User was never parsed from the GitHub GraphQL response.');
    }

    return {pullRequests, user};
}
