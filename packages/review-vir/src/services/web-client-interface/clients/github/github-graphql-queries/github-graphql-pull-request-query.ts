import {defineShape, enumShape, or} from 'object-shape-tester';
import {githubGraphqlErrorShape} from './github-graphql-error';

/**
 * This was pulled out of the actual GraphQL responses. They almost match `NonNullable<
 * components['schemas']['check-run-with-simple-check-suite']['conclusion']> ` from
 * `@octokit/openapi-types` but that type has lowercase values.
 */
export enum GithubGraphqlCheckRunConclusion {
    ActionRequired = 'ACTION_REQUIRED',
    Cancelled = 'CANCELLED',
    Completed = 'COMPLETED',
    Failure = 'FAILURE',
    InProgress = 'IN_PROGRESS',
    Neutral = 'NEUTRAL',
    Pending = 'PENDING',
    Queued = 'QUEUED',
    Skipped = 'SKIPPED',
    Stale = 'STALE',
    StartupFailure = 'STARTUP_FAILURE',
    Success = 'SUCCESS',
    TimedOut = 'TIMED_OUT',
    Waiting = 'WAITING',
}

export enum GithubGraphqlReviewState {
    Approved = 'APPROVED',
    Pending = 'PENDING',
    Commented = 'COMMENTED',
    ChangesRequested = 'CHANGES_REQUESTED',
    Dismissed = 'DISMISSED',
}

export enum GithubMergeableState {
    Mergeable = 'MERGEABLE',
    Conflicting = 'CONFLICTING',
    Unknown = 'UNKNOWN',
}

export const failedCheckRunConclusions = [
    GithubGraphqlCheckRunConclusion.ActionRequired,
    GithubGraphqlCheckRunConclusion.Cancelled,
    GithubGraphqlCheckRunConclusion.Failure,
    GithubGraphqlCheckRunConclusion.Stale,
    GithubGraphqlCheckRunConclusion.StartupFailure,
    GithubGraphqlCheckRunConclusion.TimedOut,
] as const satisfies ReadonlyArray<GithubGraphqlCheckRunConclusion>;

export const successCheckRunConclusions = [
    GithubGraphqlCheckRunConclusion.Completed,
    GithubGraphqlCheckRunConclusion.Neutral,
    GithubGraphqlCheckRunConclusion.Skipped,
    GithubGraphqlCheckRunConclusion.Success,
] as const satisfies ReadonlyArray<GithubGraphqlCheckRunConclusion>;

export const pendingCheckRunConclusions = [
    GithubGraphqlCheckRunConclusion.InProgress,
    GithubGraphqlCheckRunConclusion.Pending,
    GithubGraphqlCheckRunConclusion.Queued,
    GithubGraphqlCheckRunConclusion.Waiting,
] as const satisfies ReadonlyArray<GithubGraphqlCheckRunConclusion>;

const githubUserSearchResponseShape = defineShape(
    {
        login: '',
        avatarUrl: or(undefined, ''),
        teamAvatarUrl: or(undefined, ''),
        url: '',
    },
    true,
);
export type GithubUserSearchResponse = typeof githubUserSearchResponseShape.runTimeType;

const githubRunCheckStateShape = defineShape(
    {
        count: 0,
        state: enumShape(GithubGraphqlCheckRunConclusion),
    },
    true,
);
export type GithubRunCheckState = typeof githubRunCheckStateShape.runTimeType;

export const githubPullRequestSearchResponseShape = defineShape(
    {
        additions: 0,
        assignees: {
            nodes: [
                githubUserSearchResponseShape,
            ],
        },
        author: githubUserSearchResponseShape,
        baseRef: or(
            /** `null` means lack of permissions to read "Contents". */
            null,
            {
                name: '',
                target: {
                    oid: '',
                },
            },
        ),
        mergeable: enumShape(GithubMergeableState),
        headRef: or(
            /** `null` means lack of permissions to read "Contents". */
            null,
            {
                name: '',
                target: {
                    oid: '',
                },
            },
        ),
        labels: or(
            /** `null` means no labels */
            null,
            {
                nodes: [
                    {
                        name: '',
                        color: '',
                    },
                ],
            },
        ),
        baseRepository: {
            name: '',
            owner: githubUserSearchResponseShape,
            isArchived: false,
            isPrivate: false,
            url: '',
        },
        headRepository: {
            name: '',
            owner: githubUserSearchResponseShape,
            isArchived: false,
            isPrivate: false,
            url: '',
        },
        changedFiles: 0,
        closedAt: or(null, ''),
        commits: {
            nodes: [
                or(
                    /** `null` indicates missing the permissions to read "Contents". */
                    null,
                    {
                        commit: {
                            statusCheckRollup: or(
                                /** `null` indicates lack of permissions to read "Commit statuses". */
                                null,
                                {
                                    contexts: {
                                        checkRunCountsByState: [
                                            {
                                                count: 0,
                                                state: enumShape(GithubGraphqlCheckRunConclusion),
                                            },
                                        ],
                                    },
                                },
                            ),
                        },
                    },
                ),
            ],
            totalCount: 0,
        },
        createdAt: '',
        deletions: 0,
        id: '',
        isDraft: false,
        mergedAt: or(null, ''),
        mergedBy: or(null, githubUserSearchResponseShape),
        number: 0,
        reviewThreads: {
            nodes: [
                {
                    isResolved: false,
                },
            ],
        },
        /**
         * Comment reviews don't show up in `latestOpinionatedReviews` so much be extracted from
         * here.
         */
        latestReviews: {
            nodes: [
                {
                    state: enumShape(GithubGraphqlReviewState),
                    author: githubUserSearchResponseShape,
                },
            ],
        },
        /**
         * Indicates reviews that have been left. Note that this includes previous reviews from
         * users that currently need to re-review. Compare each of these entries with the
         * `reviewRequests` field before using them.
         */
        latestOpinionatedReviews: {
            nodes: [
                {
                    state: enumShape(GithubGraphqlReviewState),
                    author: githubUserSearchResponseShape,
                },
            ],
        },
        /** Indicates requests for review that have not been met. */
        reviewRequests: {
            nodes: [
                {
                    requestedReviewer: githubUserSearchResponseShape,
                },
            ],
        },
        title: '',
        updatedAt: '',
        url: '',
    },
    true,
);
export type GithubSearchPullRequest = typeof githubPullRequestSearchResponseShape.runTimeType;

/**
 * This shape is comes straight from an actual GitHub response to the below GraphQL query. If the
 * query changes, this must change too.
 */
export const githubPullRequestGraphqlResponseShape = defineShape(
    {
        errors: or(undefined, [githubGraphqlErrorShape]),
        data: {
            rateLimit: {
                cost: 1,
                limit: 5000,
                nodeCount: 0,
                remaining: 0,
                resetAt: '',
                used: 0,
            },
            viewer: githubUserSearchResponseShape,
            search: {
                issueCount: 0,
                pageInfo: {
                    endCursor: or('', null),
                    hasNextPage: false,
                },
                nodes: [
                    githubPullRequestSearchResponseShape,
                ],
            },
        },
    },
    true,
);

export type GithubPullRequestGraphqlResponse =
    typeof githubPullRequestGraphqlResponseShape.runTimeType;

/**
 * This query determines the above shape definition. If this query changes, make sure to change that
 * shape as well.
 */
export const githubPullRequestGraphqlQuery = /* GraphQL */ `
    query ($searchQuery: String!, $afterCursor: String) {
        rateLimit {
            cost
            limit
            nodeCount
            remaining
            resetAt
            used
        }
        viewer {
            avatarUrl
            login
            url
        }
        # first 99 = cost of 1
        # first 100 = cost of 3
        # (so use 99)
        search(first: 99, after: $afterCursor, query: $searchQuery, type: ISSUE) {
            pageInfo {
                endCursor
                hasNextPage
            }
            issueCount
            nodes {
                ... on PullRequest {
                    number
                    id
                    isDraft
                    title
                    author {
                        login
                        avatarUrl
                        url
                    }
                    url
                    mergeable
                    headRepository {
                        name
                        owner {
                            login
                            avatarUrl
                            url
                        }
                        isArchived
                        url
                        isPrivate
                    }
                    baseRepository {
                        name
                        owner {
                            login
                            avatarUrl
                            url
                        }
                        isArchived
                        url
                        isPrivate
                    }
                    createdAt
                    updatedAt
                    closedAt
                    mergedAt
                    mergedBy {
                        login
                        avatarUrl
                        url
                    }
                    baseRef {
                        target {
                            oid
                        }
                        name
                    }
                    headRef {
                        target {
                            oid
                        }
                        name
                    }
                    labels(first: 100) {
                        nodes {
                            color
                            name
                        }
                    }
                    commits(last: 1) {
                        totalCount
                        nodes {
                            commit {
                                statusCheckRollup {
                                    contexts {
                                        checkRunCountsByState {
                                            count
                                            state
                                        }
                                    }
                                }
                            }
                        }
                    }
                    additions
                    deletions
                    changedFiles
                    assignees(first: 10) {
                        nodes {
                            login
                            avatarUrl
                            url
                        }
                    }
                    reviewThreads(first: 100) {
                        nodes {
                            isResolved
                        }
                    }
                    latestReviews(first: 10) {
                        nodes {
                            author {
                                login
                                avatarUrl
                                url
                            }
                            state
                        }
                    }
                    latestOpinionatedReviews(first: 10) {
                        nodes {
                            author {
                                login
                                avatarUrl
                                url
                            }
                            state
                        }
                    }
                    reviewRequests(first: 10) {
                        nodes {
                            requestedReviewer {
                                ... on User {
                                    login
                                    avatarUrl
                                    url
                                }
                                ... on Bot {
                                    login
                                    avatarUrl
                                    url
                                }
                                ... on Team {
                                    name
                                    teamAvatarUrl: avatarUrl
                                    url
                                }
                                ... on Mannequin {
                                    login
                                    avatarUrl
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
