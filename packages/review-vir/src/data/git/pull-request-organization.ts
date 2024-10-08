import {getOrSet} from '@augment-vir/common';
import {PullRequest, PullRequestMergeStatus} from './pull-request.js';
import {User} from './user.js';

export type PullRequestsByStatus = {
    reviewer: Readonly<PullRequest>[];
    assigned: Readonly<PullRequest>[];
    closed: Readonly<PullRequest>[];
};

export type OwnedPullRequests = {owner: User; pullRequests: PullRequestsByStatus};

export type PullRequestsByOwner = {
    [ownerName in string]: OwnedPullRequests;
};

export function organizePullRequestsByOwner(
    user: Pick<User, 'username'>,
    pullRequests: ReadonlyArray<Readonly<PullRequest>>,
): PullRequestsByOwner {
    const pullRequestsByOwner: PullRequestsByOwner = {};

    pullRequests.forEach((pullRequest) => {
        const pullRequestOwner = pullRequest.id.owner;

        const organizedPullRequests = getOrSet(
            pullRequestsByOwner,
            pullRequestOwner.username,
            () => {
                return {
                    owner: pullRequestOwner,
                    pullRequests: {
                        assigned: [],
                        closed: [],
                        reviewer: [],
                    },
                };
            },
        );

        if (
            pullRequest.status.mergeStatus === PullRequestMergeStatus.Merged ||
            pullRequest.status.mergeStatus === PullRequestMergeStatus.Rejected
        ) {
            organizedPullRequests.pullRequests.closed.push(pullRequest);
        } else if (user.username in pullRequest.users.assignees) {
            organizedPullRequests.pullRequests.assigned.push(pullRequest);
        } else {
            organizedPullRequests.pullRequests.reviewer.push(pullRequest);
        }
    });

    return pullRequestsByOwner;
}
