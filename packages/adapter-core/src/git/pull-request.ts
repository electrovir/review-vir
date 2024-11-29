import {fullDateShape} from 'date-vir';
import {defineShape, enumShape, indexedKeys, or, unknownShape} from 'object-shape-tester';
import {gitBranchShape} from './git-branch.js';
import {gitUserShape} from './git-user.js';

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
        user: gitUserShape,
        isPrimaryReviewer: false,
        isCodeOwner: false,
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
        owner: gitUserShape,
        gitServiceName: '',
    },
    authTokenName: '',
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
        checksStatus: or(pullRequestChecksShape, undefined),
        comments: {
            resolved: 0,
            total: 0,
        },
        commitCount: 0,
        mergeStatus: enumShape(PullRequestMergeStatus),
        mergedBy: or(undefined, gitUserShape),
        pullRequestLabels: [
            {
                name: '',
                color: '',
            },
        ],
        hasMergeConflicts: false,
    },
    currentUser: {
        isPrimaryReviewer: false,
        isCodeOwner: false,
        hasReviewed: false,
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
            values: gitUserShape,
            required: false,
        }),
    },
    query: {
        rawResults: unknownShape(),
        exceedsCostThreshold: false,
    },
});

export type PullRequest = typeof pullRequestShape.runtimeType;
