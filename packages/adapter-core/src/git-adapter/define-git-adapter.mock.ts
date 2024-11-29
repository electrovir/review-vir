import {wait} from '@augment-vir/common';
import {mockGitUser} from '../git/git-user.mock.js';
import {defineGitAdapter} from './define-git-adapter.js';

export const MockGitAdapter = defineGitAdapter({
    async fetchGitData() {
        await wait({milliseconds: 100});

        return {
            queryCost: 0,
            data: [
                {
                    pullRequests: [],
                    user: mockGitUser,
                },
            ],
        };
    },
    serviceName: 'mock git',
});
