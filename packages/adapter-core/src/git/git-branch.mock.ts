import type {GitBranch} from './git-branch.js';
import {mockGitRepo} from './git-repo.mock.js';

export const mockGitBranch: GitBranch = {
    branchName: 'branch',
    headCommitHash: 'hash',
    repo: mockGitRepo,
};
