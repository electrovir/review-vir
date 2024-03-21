import {fullDateShape} from 'date-vir';
import {classShape, defineShape, enumShape, indexedKeys, or} from 'object-shape-tester';
import {SupportedServiceName} from '../auth-tokens';
import {gitBranchShape} from './git-branch';
import {userShape} from './user';

export enum PullRequestMergeStatus {
    Draft = 'draft',
    Merged = 'merged',
    Open = 'open',
    Rejected = 'rejected',
}

export enum PullRequestReviewStatus {
    Accepted = 'accepted',
    Rejected = 'rejected',
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
export type PullRequestChecks = typeof pullRequestChecksShape.runTimeType;

export const submittedPullRequestReviewShape = defineShape(
    {
        user: userShape,
        reviewStatus: enumShape(PullRequestReviewStatus),
    },
    true,
);
export type SubmittedPullRequestReview = typeof submittedPullRequestReviewShape.runTimeType;

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
        commentCount: 0,
        commitCount: 0,
        mergeStatus: enumShape(PullRequestMergeStatus),
        mergedBy: or(undefined, userShape),
        needsReviewFromCurrentUser: false,
    },
    changes: {
        additions: 0,
        deletions: 0,
        changedFiles: 0,
    },
    users: {
        reviewers: {
            submitted: indexedKeys({
                keys: '',
                values: submittedPullRequestReviewShape,
                required: false,
            }),
            pending: indexedKeys({
                keys: '',
                values: userShape,
                required: false,
            }),
        },
        assignees: indexedKeys({
            keys: '',
            values: userShape,
            required: false,
        }),
    },
});

export type PullRequest = typeof pullRequestShape.runTimeType;
