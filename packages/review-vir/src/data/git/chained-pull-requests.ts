import {getOrSet} from '@augment-vir/common';
import {FullDate, isDateAfter, toTimestamp} from 'date-vir';
import {PullRequest, PullRequestMergeStatus} from './pull-request.js';

export type ChainedPullRequest = {
    needsChainedReviews: boolean;
    latestChainedUpdate: FullDate;
    pullRequest: PullRequest;
    children: ChainedPullRequest[];
    isChained: boolean;
};

export function organizeChainedPullRequests(
    pullRequests: ReadonlyArray<PullRequest>,
): ChainedPullRequest[] {
    const chainedPullRequests = pullRequests.reduce(
        (accum, pullRequest) => {
            const rawBranchName = pullRequest.branches.headBranch.branchName;
            const branchName = rawBranchName instanceof Error ? '' : rawBranchName;

            const accumArray = getOrSet(accum, branchName, () => []);

            accumArray.push({
                needsChainedReviews: pullRequest.status.needsReviewFromCurrentUser,
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
            const targetBranch = pullRequest.pullRequest.branches.targetBranch.branchName;

            if (targetBranch instanceof Error) {
                return;
            }

            const targetPullRequests = chainedPullRequests[targetBranch];

            if (targetPullRequests) {
                pullRequest.isChained = true;

                targetPullRequests.forEach((targetPullRequest) => {
                    if (pullRequest.pullRequest.status.needsReviewFromCurrentUser) {
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

    return (
        Object.values(chainedPullRequests)
            .flat()
            // most recent updates on the bottom
            .sort((a, b) => {
                return (
                    toTimestamp(a.pullRequest.dates.lastUpdated) -
                    toTimestamp(b.pullRequest.dates.lastUpdated)
                );
            })
            // needs your review on top
            .sort((a, b) => {
                return (
                    Number(b.pullRequest.status.needsReviewFromCurrentUser) -
                    Number(a.pullRequest.status.needsReviewFromCurrentUser)
                );
            })
            // needs chained review on top
            .sort((a, b) => Number(b.needsChainedReviews) - Number(a.needsChainedReviews))
            // as primary reviewer on the top
            .sort((a, b) => {
                return (
                    Number(
                        b.pullRequest.status.userIsPrimaryReviewer &&
                            b.pullRequest.status.needsReviewFromCurrentUser,
                    ) -
                    Number(
                        a.pullRequest.status.userIsPrimaryReviewer &&
                            a.pullRequest.status.needsReviewFromCurrentUser,
                    )
                );
            })
            // drafts on the bottom
            .sort((a, b) => {
                return (
                    Number(a.pullRequest.status.mergeStatus === PullRequestMergeStatus.Draft) -
                    Number(b.pullRequest.status.mergeStatus === PullRequestMergeStatus.Draft)
                );
            })

            .filter((chainedPullRequest) => !chainedPullRequest.isChained)
    );
}
