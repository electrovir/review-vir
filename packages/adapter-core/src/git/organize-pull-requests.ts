import {getOrSet, mapObjectValues} from '@augment-vir/common';
import {FullDate, isDateAfter} from 'date-vir';
import {GitUser} from './git-user.js';
import {PullRequest, PullRequestMergeStatus} from './pull-request.js';

export type PullRequestsByStatus = {
    /** Pull Request for which the current user is a reviewer. */
    reviewer: Readonly<ChainedPullRequest>[];
    /**
     * Pull Request for which the current user is an assignee. (This takes precedence over
     * `reviewer`.
     */
    assigned: Readonly<ChainedPullRequest>[];
};

export type OwnedPullRequests = {
    owner: GitUser;
    chainedPullRequests: PullRequestsByStatus;
};

export type PullRequestsByOwner = {
    [OwnerName in string]: OwnedPullRequests;
};

export type ChainedPullRequest = {
    needsChainedReviews: boolean;
    latestChainedUpdate: FullDate;
    pullRequest: PullRequest;
    children: ChainedPullRequest[];
    isChained: boolean;
};

export function organizePullRequests(
    currentUser: Pick<GitUser, 'username'>,
    pullRequests: ReadonlyArray<Readonly<PullRequest>>,
): PullRequestsByOwner {
    const rawPullRequests: {
        [OwnerName in string]: {
            owner: GitUser;
            pullRequests: {
                reviewer: PullRequest[];
                assigned: PullRequest[];
            };
        };
    } = {};

    pullRequests.forEach((pullRequest) => {
        const organizedRawPullRequests = getOrSet(
            rawPullRequests,
            pullRequest.id.owner.username,
            () => {
                return {
                    owner: pullRequest.id.owner,
                    pullRequests: {
                        assigned: [],
                        reviewer: [],
                    },
                };
            },
        );

        if (
            pullRequest.status.mergeStatus === PullRequestMergeStatus.Merged ||
            pullRequest.status.mergeStatus === PullRequestMergeStatus.Rejected
        ) {
            return;
        } else if (currentUser.username in pullRequest.users.assignees) {
            organizedRawPullRequests.pullRequests.assigned.push(pullRequest);
        } else if (currentUser.username in pullRequest.users.reviewers) {
            organizedRawPullRequests.pullRequests.reviewer.push(pullRequest);
        }
    });

    const chainedPullRequestsByOwner = mapObjectValues(
        rawPullRequests,
        (ownerName, ownedPullRequests): OwnedPullRequests => {
            return {
                owner: ownedPullRequests.owner,
                chainedPullRequests: mapObjectValues(
                    ownedPullRequests.pullRequests,
                    (reviewType, pullRequests) => {
                        return createChainedPullRequests(pullRequests);
                    },
                ),
            };
        },
    );

    return chainedPullRequestsByOwner;
}

export function createChainedPullRequests(
    pullRequests: ReadonlyArray<PullRequest>,
): ChainedPullRequest[] {
    const chainedPullRequests = pullRequests.reduce(
        (accum, pullRequest) => {
            const pullRequestsWithCurrentHead = getOrSet(
                accum,
                [
                    pullRequest.branches.headBranch.repo.repoName,
                    pullRequest.branches.headBranch.branchName,
                ].join('/'),
                () => [],
            );

            pullRequestsWithCurrentHead.push({
                needsChainedReviews: !pullRequest.currentUser.hasReviewed,
                latestChainedUpdate: pullRequest.dates.lastUpdated,
                pullRequest,
                children: [],
                isChained: false,
            });

            return accum;
        },
        {} as Record<string, ChainedPullRequest[]>,
    );

    Object.values(chainedPullRequests).forEach((subPullRequests) => {
        subPullRequests.forEach((pullRequest) => {
            const targetPullRequests = chainedPullRequests[
                [
                    pullRequest.pullRequest.branches.targetBranch.repo.repoName,
                    pullRequest.pullRequest.branches.targetBranch.branchName,
                ].join('/')
            ]?.filter(
                (pullRequest) =>
                    /**
                     * Remove branches pull requests that target themselves because
                     *
                     * 1. That makes no sense
                     * 2. It'll mess up all our logic
                     * 3. It'll create circular references
                     */
                    pullRequest.pullRequest.branches.headBranch.branchName !==
                    pullRequest.pullRequest.branches.targetBranch.branchName,
            );

            if (targetPullRequests) {
                pullRequest.isChained = true;

                targetPullRequests.forEach((targetPullRequest) => {
                    if (!pullRequest.pullRequest.currentUser.hasReviewed) {
                        targetPullRequest.needsChainedReviews = true;
                    }
                    if (
                        isDateAfter({
                            fullDate: pullRequest.pullRequest.dates.lastUpdated,
                            relativeTo: targetPullRequest.latestChainedUpdate,
                        })
                    ) {
                        targetPullRequest.latestChainedUpdate =
                            pullRequest.pullRequest.dates.lastUpdated;
                    }

                    targetPullRequest.children.push(pullRequest);
                });
            }
        });
    });

    return Object.values(chainedPullRequests)
        .flat()
        .filter(
            (pullRequest) =>
                /**
                 * Remove all chained pull requests because they will be included as children pull
                 * requests anyway.
                 */
                !pullRequest.isChained,
        )
        .sort((a, b) => {
            const bTimeOrder: number = isDateAfter({
                fullDate: b.pullRequest.dates.lastUpdated,
                relativeTo: a.pullRequest.dates.lastUpdated,
            })
                ? 1
                : isDateAfter({
                        fullDate: a.pullRequest.dates.lastUpdated,
                        relativeTo: b.pullRequest.dates.lastUpdated,
                    })
                  ? -1
                  : 0;

            const aSort: number = getPullRequestSortNumber(a) + bTimeOrder;
            const bSort: number = getPullRequestSortNumber(b);

            return bSort - aSort;
        });
}

function getPullRequestSortNumber(pullRequest: Readonly<ChainedPullRequest>): number {
    const isDraft = pullRequest.pullRequest.status.mergeStatus === PullRequestMergeStatus.Draft;
    const needsReview = !pullRequest.pullRequest.currentUser.hasReviewed;

    const isPrimaryReviewer = needsReview && pullRequest.pullRequest.currentUser.isPrimaryReviewer;
    const isCodeOwner = needsReview && pullRequest.pullRequest.currentUser.isCodeOwner;

    const draft = isDraft ? 0 : 10_000;
    const primary = isPrimaryReviewer ? 1000 : 0;
    const codeOwner = isCodeOwner ? 100 : 0;
    const review = needsReview ? 10 : 0;

    return draft + primary + codeOwner + review;
}
