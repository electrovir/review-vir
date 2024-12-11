import {fullDateShape} from 'date-vir';
import {defineShape} from 'object-shape-tester';
import {pullRequestShape} from './pull-request.js';

export const gitDataShape = defineShape({
    pullRequests: [pullRequestShape],
    time: fullDateShape,
});
export type GitData = typeof gitDataShape.runtimeType;
