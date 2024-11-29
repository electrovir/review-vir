import {classShape, defineShape, or} from 'object-shape-tester';
import {gitUserShape} from './git-user.js';
import {pullRequestShape} from './pull-request.js';

export const gitDataShape = defineShape(
    {
        user: gitUserShape,
        pullRequests: [or(pullRequestShape, classShape(Error))],
    },
    true,
);
export type GitData = typeof gitDataShape.runtimeType;
