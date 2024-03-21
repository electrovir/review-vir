import {getOrSet} from '@augment-vir/common';
import {PullRequest} from './pull-request';

export type ChainedPullRequest = {
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
                pullRequest: pullRequest,
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
                    targetPullRequest.children.push(pullRequest);
                });
            }
        });
    });

    return Object.values(chainedPullRequests)
        .flat()
        .filter((chainedPullRequest) => !chainedPullRequest.isChained);
}
