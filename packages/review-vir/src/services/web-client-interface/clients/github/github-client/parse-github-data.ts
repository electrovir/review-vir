import {
    arrayToObject,
    filterMap,
    filterObject,
    isTruthy,
    typedArrayIncludes,
} from '@augment-vir/common';
import {createFullDateInUserTimezone} from 'date-vir';
import {SupportedServiceName} from '../../../../../data/auth-tokens';
import {
    PullRequest,
    PullRequestChecks,
    PullRequestMergeStatus,
    PullRequestReviewStatus,
} from '../../../../../data/git/pull-request';
import {User} from '../../../../../data/git/user';
import {
    GithubGraphqlReviewState,
    GithubMergeableState,
    GithubPullRequestGraphqlResponse,
    GithubRunCheckState,
    GithubSearchPullRequest,
    GithubUserSearchResponse,
    failedCheckRunConclusions,
    pendingCheckRunConclusions,
    successCheckRunConclusions,
} from '../github-graphql-queries/github-graphql-pull-request-query';

export function parseGithubSearchPullRequest(
    authTokenName: string,
    raw: Readonly<GithubSearchPullRequest>,
    currentUser: Readonly<User>,
    rateLimit: Readonly<GithubPullRequestGraphqlResponse['data']['rateLimit']>,
): PullRequest {
    const dates = {
        closed: raw.closedAt ? createFullDateInUserTimezone(raw.closedAt) : undefined,
        created: createFullDateInUserTimezone(raw.createdAt),
        lastUpdated: createFullDateInUserTimezone(raw.updatedAt),
    };

    const assignees = raw.assignees.nodes.map(parseGithubUser);
    const authors = [parseGithubUser(raw.author)];

    const pullRequestUsers: PullRequest['users'] = {
        assignees: groupUsersByUserName(assignees.length ? assignees : authors),
        reviewers: parseReviews(raw),
    };

    const mergeStatus: PullRequestMergeStatus = raw.mergedAt
        ? PullRequestMergeStatus.Merged
        : raw.closedAt
          ? PullRequestMergeStatus.Rejected
          : raw.isDraft
            ? PullRequestMergeStatus.Draft
            : PullRequestMergeStatus.Open;

    const pullRequest: PullRequest = {
        auth: {
            client: SupportedServiceName.Github,
            tokenName: authTokenName,
        },
        branches: {
            headBranch: {
                branchName: raw.headRef?.name || new Error("Missing 'Contents' read permissions."),
                headCommitHash:
                    raw.headRef?.target?.oid || new Error("Missing 'Contents' read permissions."),
                repo: {
                    isArchived: raw.headRepository.isArchived,
                    isPrivate: raw.headRepository.isPrivate,
                    htmlUrl: raw.headRepository.url,
                    repoName: raw.headRepository.name,
                    repoOwner: parseGithubUser(raw.headRepository.owner),
                },
            },
            targetBranch: {
                branchName: raw.baseRef?.name || new Error("Missing 'Contents' read permissions."),
                headCommitHash:
                    raw.baseRef?.target?.oid || new Error("Missing 'Contents' read permissions."),
                repo: {
                    isArchived: raw.baseRepository.isArchived,
                    isPrivate: raw.baseRepository.isPrivate,
                    htmlUrl: raw.baseRepository.url,
                    repoName: raw.baseRepository.name,
                    repoOwner: parseGithubUser(raw.baseRepository.owner),
                },
            },
        },
        changes: {
            additions: raw.additions,
            deletions: raw.deletions,
            changedFiles: raw.changedFiles,
        },
        dates,
        id: {
            htmlUrl: raw.url,
            prId: raw.id,
            prNumber: String(raw.number),
            title: raw.title,
            owner: parseGithubUser(raw.baseRepository.owner),
        },
        status: {
            checksStatus: parseStates(
                raw.commits.nodes[0]?.commit?.statusCheckRollup?.contexts?.checkRunCountsByState,
            ),
            comments: parseComments(raw.reviewThreads.nodes),
            commitCount: raw.commits.totalCount,
            mergeStatus,
            mergedBy: raw.mergedBy ? parseGithubUser(raw.mergedBy) : undefined,
            needsReviewFromCurrentUser: determineIfNeedsReviewFromCurrentUser(
                mergeStatus,
                currentUser,
                pullRequestUsers,
            ),
            hasMergeConflicts: raw.mergeable === GithubMergeableState.Conflicting,
            labels: raw.labels
                ? raw.labels.nodes.map((node) => {
                      return {
                          ...node,
                          color: `#${node.color}`,
                      };
                  })
                : [],
        },
        users: pullRequestUsers,
        cost: rateLimit,
    };
    return pullRequest;
}

function parseComments(
    commentNodes: GithubSearchPullRequest['reviewThreads']['nodes'],
): PullRequest['status']['comments'] {
    return commentNodes.reduce(
        (accum, current) => {
            if (current.isResolved) {
                accum.resolved++;
            }
            accum.total++;
            return accum;
        },
        {resolved: 0, total: 0},
    );
}

function determineIfNeedsReviewFromCurrentUser(
    mergeStatus: PullRequestMergeStatus,
    user: Readonly<Pick<User, 'username'>>,
    pullRequestUsers: Readonly<Pick<PullRequest['users'], 'reviewers' | 'assignees'>>,
): boolean {
    return (
        mergeStatus === PullRequestMergeStatus.Open &&
        (user.username in pullRequestUsers.reviewers.pending ||
            !(user.username in pullRequestUsers.reviewers.submitted)) &&
        !(user.username in pullRequestUsers.assignees)
    );
}

function parseReviews(
    raw: Readonly<
        Pick<
            GithubSearchPullRequest,
            'latestOpinionatedReviews' | 'reviewRequests' | 'latestReviews'
        >
    >,
): PullRequest['users']['reviewers'] {
    const pendingReviewers = groupUsersByUserName(
        raw.reviewRequests.nodes.map((node) => parseGithubUser(node.requestedReviewer)),
    );

    const submittedReviewers = filterMap(
        [
            ...raw.latestReviews.nodes,
            ...raw.latestOpinionatedReviews.nodes,
        ],
        (entry) => {
            const parsedUser = parseGithubUser(entry.author);

            const reviewStatus: PullRequestReviewStatus | undefined =
                entry.state === GithubGraphqlReviewState.Approved
                    ? PullRequestReviewStatus.Accepted
                    : entry.state === GithubGraphqlReviewState.ChangesRequested
                      ? PullRequestReviewStatus.Rejected
                      : undefined;

            if (reviewStatus) {
                return {
                    user: parsedUser,
                    reviewStatus,
                };
            } else {
                pendingReviewers[parsedUser.username] = parsedUser;
                return undefined;
            }
        },
        isTruthy,
    );

    const submitted = arrayToObject(submittedReviewers, (entry) => entry.user.username);

    return {
        pending: filterObject(pendingReviewers, (key) => {
            return !(key in submitted);
        }),
        submitted,
    };
}

function parseStates(
    checkStates: ReadonlyArray<Readonly<GithubRunCheckState>> | undefined,
): PullRequestChecks | Error {
    if (!checkStates) {
        return new Error("Missing 'Contents' or 'Commit statuses' read permissions.");
    }

    const results = checkStates.reduce(
        (accum, checkState) => {
            if (typedArrayIncludes(failedCheckRunConclusions, checkState.state)) {
                accum.failCount += checkState.count;
            } else if (typedArrayIncludes(pendingCheckRunConclusions, checkState.state)) {
                accum.inProgressCount += checkState.count;
            } else if (typedArrayIncludes(successCheckRunConclusions, checkState.state)) {
                accum.successCount += checkState.count;
            }
            accum.totalCount++;
            return accum;
        },
        {
            successCount: 0,
            failCount: 0,
            inProgressCount: 0,
            totalCount: 0,
        },
    );

    return results;
}

export function parseGithubUser(raw: GithubUserSearchResponse): User {
    return {
        avatarUrl: raw.teamAvatarUrl || raw.avatarUrl || '',
        profileUrl: raw.url,
        username: raw.login,
    };
}

function groupUsersByUserName(users: ReadonlyArray<Readonly<User>>) {
    return arrayToObject(users, (user) => user.username);
}
