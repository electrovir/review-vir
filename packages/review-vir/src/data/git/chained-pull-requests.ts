import {getOrSet} from '@augment-vir/common';
import {FullDate, isDateAfter} from 'date-vir';
import {PullRequest} from './pull-request';

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

    return Object.values(chainedPullRequests)
        .flat()
        .sort((a, b) => {
            return isDateAfter({fullDate: a.latestChainedUpdate, relativeTo: b.latestChainedUpdate})
                ? -1
                : 1;
        })
        .sort((a, b) => Number(b.needsChainedReviews) - Number(a.needsChainedReviews))
        .filter((chainedPullRequest) => !chainedPullRequest.isChained);
}
