import {defineShape} from 'object-shape-tester';

export const userShape = defineShape(
    {
        username: '',
        profileUrl: '',
        avatarUrl: '',
    },
    true,
);

export type User = typeof userShape.runtimeType;
