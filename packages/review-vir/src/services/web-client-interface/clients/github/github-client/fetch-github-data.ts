import {ensureError, randomString, typedObjectFromEntries} from '@augment-vir/common';
import {isDateAfter} from 'date-vir';
import {isError} from 'element-vir';
import {assertDefined} from 'run-time-assertions';
import {AuthToken} from '../../../../../data/auth-tokens';
import {GitData} from '../../../../../data/git/git-data';
import {PullRequest} from '../../../../../data/git/pull-request';
import {User} from '../../../../../data/git/user';
import {fetchGithubGraphql} from '../github-fetch-graphql';
import {
    GithubGraphqlQueryType,
    GithubGraphqlSearchQuery,
} from '../github-graphql-queries/github-graphql-queries';
import {parseGithubSearchPullRequest, parseGithubUser} from './parse-github-data';

let costTooHigh = false;

export async function fetchGithubData(
    authTokens: ReadonlyArray<Readonly<AuthToken>>,
): Promise<GitData> {
    if (costTooHigh) {
        throw new Error('Refusing to fetch because GraphQL query cost is too high.');
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

                    if (isError(value)) {
                        return [value];
                    } else if (value.data.rateLimit.cost > 1) {
                        costTooHigh = true;
                        throw new Error(`GraphQL query cost is too high.`);
                    } else if (!user) {
                        user = parseGithubUser(value.data.viewer);
                    }
                    return value.data.search.nodes.map((rawPullRequest) => {
                        assertDefined(user);

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

    console.log(pullRequests.filter((entry) => (entry as PullRequest).id.prNumber === '619')[0]);

    return {pullRequests, user};
}
