import {fullDateShape} from 'date-vir';
import {
    classShape,
    defineShape,
    enumShape,
    indexedKeys,
    or,
    unknownShape,
} from 'object-shape-tester';
import {SupportedServiceName} from '../auth-tokens.js';
import {gitBranchShape} from './git-branch.js';
import {userShape} from './user.js';

export enum PullRequestMergeStatus {
    Draft = 'draft',
    Merged = 'merged',
    Open = 'open',
    Rejected = 'rejected',
}

export enum PullRequestReviewStatus {
    Accepted = 'accepted',
    Rejected = 'rejected',
    Pending = 'pending',
}

const pullRequestChecksShape = defineShape(
    {
        successCount: 0,
        failCount: 0,
        inProgressCount: 0,
        totalCount: 0,
    },
    true,
);
export type PullRequestChecks = typeof pullRequestChecksShape.runtimeType;

export const pullRequestReviewShape = defineShape(
    {
        user: userShape,
        isPrimaryReviewer: false,
        reviewStatus: enumShape(PullRequestReviewStatus),
    },
    true,
);
export type PullRequestReview = typeof pullRequestReviewShape.runtimeType;

export const pullRequestShape = defineShape({
    id: {
        htmlUrl: '',
        prId: '',
        prNumber: '',
        title: '',
        owner: userShape,
    },
    auth: {
        client: enumShape(SupportedServiceName),
        tokenName: '',
    },
    branches: {
        /** The branch that the PR is coming from. */
        headBranch: gitBranchShape,
        /** The branch that the PR is merging into. */
        targetBranch: gitBranchShape,
    },
    dates: {
        created: fullDateShape,
        lastUpdated: fullDateShape,
        closed: or(undefined, fullDateShape),
    },
    status: {
        checksStatus: or(pullRequestChecksShape, classShape(Error)),
        comments: {
            resolved: 0,
            total: 0,
        },
        commitCount: 0,
        mergeStatus: enumShape(PullRequestMergeStatus),
        mergedBy: or(undefined, userShape),
        needsReviewFromCurrentUser: false,
        userIsPrimaryReviewer: false,
        labels: [
            {
                name: '',
                color: '',
            },
        ],
        hasMergeConflicts: false,
    },
    changes: {
        additions: 0,
        deletions: 0,
        changedFiles: 0,
    },
    users: {
        reviewers: indexedKeys({
            keys: '',
            values: pullRequestReviewShape,
            required: false,
        }),
        assignees: indexedKeys({
            keys: '',
            values: userShape,
            required: false,
        }),
    },
    cost: unknownShape(),
    raw: unknownShape(),
});

export type PullRequest = typeof pullRequestShape.runtimeType;
