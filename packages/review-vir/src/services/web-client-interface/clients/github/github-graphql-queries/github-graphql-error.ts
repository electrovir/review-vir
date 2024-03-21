import {defineShape, or, unknownShape} from 'object-shape-tester';

export const githubGraphqlErrorShape = defineShape({
    extensions: unknownShape(),
    locations: [{line: 0, column: 0}],
    message: '',
    path: [or('', 0)],
    type: '',
});
