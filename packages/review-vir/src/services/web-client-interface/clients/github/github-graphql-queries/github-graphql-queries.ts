import {assert, check} from '@augment-vir/assert';
import {mapObjectValues, type AtLeastTuple} from '@augment-vir/common';
import {calculateRelativeDate, getNowInUserTimezone, toSimpleDatePartString} from 'date-vir';
import {ShapeDefinition, and, defineShape} from 'object-shape-tester';
import {RequireExactlyOne} from 'type-fest';
import {sum} from '../../../../../util/sum.js';
import {
    githubPullRequestGraphqlQuery,
    githubPullRequestGraphqlResponseShape,
} from './github-graphql-pull-request-query.js';

export enum GithubGraphqlSearchQuery {
    OpenPullRequests = 'open-pull-requests',
    ClosedPullRequests = 'closed-pull-requests',
}

export type GithubQueryOptions = {
    filter: RequireExactlyOne<{onlyMyself: boolean; org: string}>;
};

function assertValidGithubQueryOptions(options: GithubQueryOptions) {
    if (!options.filter.onlyMyself && !options.filter.org) {
        throw new Error('Github query too broad: must filter to self or an org');
    }
}

const githubGraphqlQuerySearchStringCreators: Readonly<
    Record<GithubGraphqlSearchQuery, (options: Partial<GithubQueryOptions>) => string>
> = {
    [GithubGraphqlSearchQuery.OpenPullRequests](options) {
        const queryParts = [
            'is:open',
            'type:pr',
            'archived:false',
            options.filter?.onlyMyself && 'involves:@me',
            options.filter?.org && `org:${options.filter.org}`,
        ].filter(check.isTruthy);

        return queryParts.join(' ');
    },
    [GithubGraphqlSearchQuery.ClosedPullRequests](options) {
        const weekAgo = calculateRelativeDate(getNowInUserTimezone(), {weeks: -1});
        const weekAgoString = toSimpleDatePartString(weekAgo);

        const queryParts = [
            'is:closed',
            'type:pr',
            'archived:false',
            `closed:>=${weekAgoString}`,
            options.filter?.onlyMyself && 'involves:@me',
            options.filter?.org && `org:${options.filter.org}`,
        ].filter(check.isTruthy);
        return queryParts.join(' ');
    },
};

export function createGithubGraphqlQuery(
    queryType: GithubGraphqlQueryType,
    searchQuery: GithubGraphqlSearchQuery,
    queryOptions: GithubQueryOptions,
    cursor: string | undefined,
): {
    query: string;
    variables: Record<string, string | null>;
} {
    assertValidGithubQueryOptions(queryOptions);

    return {
        query: githubGraphqlQueryTypeStrings[queryType],
        variables: {
            searchQuery: githubGraphqlQuerySearchStringCreators[searchQuery](queryOptions),
            afterCursor: cursor || null,
        },
    };
}

export enum GithubGraphqlQueryType {
    PullRequest = 'pull-request',
}

const githubGraphqlQueryTypeStrings: Readonly<Record<GithubGraphqlQueryType, string>> = {
    [GithubGraphqlQueryType.PullRequest]: githubPullRequestGraphqlQuery,
};

export const githubGraphqlResponseShapes = mapObjectValues(
    {
        [GithubGraphqlQueryType.PullRequest]: githubPullRequestGraphqlResponseShape,
    } as const satisfies Readonly<Record<GithubGraphqlQueryType, ShapeDefinition<any, true>>>,
    (key, originalShape) => {
        return defineShape(and(originalShape, {authTokenName: ''}), true);
    },
);

export type GithubGraphqlResponse<QueryType extends GithubGraphqlQueryType> =
    (typeof githubGraphqlResponseShapes)[QueryType]['runtimeType'];

export const paginationInfoGetters: Readonly<{
    [QueryType in GithubGraphqlQueryType]: (
        response: Readonly<GithubGraphqlResponse<QueryType>>,
    ) => {
        totalItemCount: number;
        /**
         * Only set if there are more pages. Otherwise, it is `undefined` when there are no more
         * pages.
         */
        nextPageCursor: string | undefined;
    };
}> = {
    [GithubGraphqlQueryType.PullRequest](response) {
        return {
            totalItemCount: response.data.search.issueCount,
            nextPageCursor: response.data.search.pageInfo.hasNextPage
                ? response.data.search.pageInfo.endCursor || undefined
                : undefined,
        };
    },
};
export const paginationCombinators: Readonly<{
    [QueryType in GithubGraphqlQueryType]: (
        responses: Readonly<AtLeastTuple<Readonly<GithubGraphqlResponse<QueryType>>, 1>>,
    ) => Readonly<GithubGraphqlResponse<QueryType>>;
}> = {
    [GithubGraphqlQueryType.PullRequest](responses) {
        const lastResponse = responses[responses.length - 1];

        assert.isDefined(lastResponse);

        return {
            authTokenName: lastResponse.authTokenName,
            errors: responses.flatMap((response) => response.errors ?? []),
            data: {
                rateLimit: {
                    ...lastResponse.data.rateLimit,
                    cost: responses.map((response) => response.data.rateLimit.cost).reduce(sum),
                    nodeCount: responses
                        .map((response) => response.data.rateLimit.nodeCount)
                        .reduce(sum),
                },
                viewer: lastResponse.data.viewer,
                search: {
                    issueCount: lastResponse.data.search.issueCount,
                    pageInfo: lastResponse.data.search.pageInfo,
                    nodes: responses.flatMap((response) => response.data.search.nodes),
                },
            },
        };
    },
};
