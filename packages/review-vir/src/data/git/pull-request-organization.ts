import {getOrSet} from '@augment-vir/common';
import {toTimestamp} from 'date-vir';
import {PullRequest, PullRequestMergeStatus} from './pull-request';
import {User} from './user';

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

    Object.values(pullRequestsByOwner).forEach((ownedPullRequests) => {
        ownedPullRequests.pullRequests.assigned.sort((a, b) => {
            return toTimestamp(a.dates.created) - toTimestamp(b.dates.created);
        });
        ownedPullRequests.pullRequests.reviewer
            .sort((a, b) => {
                return toTimestamp(b.dates.lastUpdated) - toTimestamp(a.dates.lastUpdated);
            })
            .sort((a, b) => {
                if (a.status.mergeStatus !== b.status.mergeStatus) {
                    if (a.status.mergeStatus === PullRequestMergeStatus.Draft) {
                        return 1;
                    } else if (b.status.mergeStatus === PullRequestMergeStatus.Draft) {
                        return -1;
                    }
                }
                return 0;
            })
            .sort((a, b) => {
                if (a.status.needsReviewFromCurrentUser === b.status.needsReviewFromCurrentUser) {
                    return 0;
                } else if (a.status.needsReviewFromCurrentUser) {
                    return -1;
                } else {
                    return 1;
                }
            });
        ownedPullRequests.pullRequests.closed.sort((a, b) => {
            if (!a.dates.closed) {
                return -1;
            } else if (!b.dates.closed) {
                return 1;
            }

            return toTimestamp(b.dates.closed) - toTimestamp(a.dates.closed);
        });
    });

    return pullRequestsByOwner;
}
