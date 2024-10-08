import {classShape, defineShape, or} from 'object-shape-tester';
import {pullRequestShape} from './pull-request.js';
import {userShape} from './user.js';

export const gitDataShape = defineShape(
    {
        user: userShape,
        pullRequests: [or(pullRequestShape, classShape(Error))],
    },
    true,
);
export type GitData = typeof gitDataShape.runtimeType;
