import {defineShape} from 'object-shape-tester';

export const gitUserShape = defineShape(
    {
        username: '',
        profileUrl: '',
        avatarUrl: '',
    },
    true,
);

export type GitUser = typeof gitUserShape.runtimeType;
