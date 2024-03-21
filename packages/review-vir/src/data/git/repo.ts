import {defineShape} from 'object-shape-tester';
import {userShape} from './user';

export const gitRepoShape = defineShape(
    {
        repoName: '',
        repoOwner: userShape,
        htmlUrl: '',
        isPrivate: false,
        isArchived: false,
    },
    true,
);

export type GitRepo = typeof gitRepoShape.runTimeType;
