import {classShape, defineShape, or} from 'object-shape-tester';
import {gitRepoShape} from './repo';

export const gitBranchShape = defineShape(
    {
        repo: gitRepoShape,
        branchName: or('', classShape(Error)),
        headCommitHash: or('', classShape(Error)),
    },
    true,
);

export type GitBranch = typeof gitBranchShape.runTimeType;
