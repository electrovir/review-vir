import type {GitRepo} from './git-repo.js';

export const mockGitRepo: GitRepo = {
    htmlUrl: 'html',
    isArchived: false,
    isPrivate: false,
    repoName: 'repo name',
    repoOwner: {
        avatarUrl: 'avatar',
        profileUrl: 'profile',
        username: 'user name',
    },
};
