import {describe, itCases} from '@augment-vir/test';
import {ShapeMismatchError} from 'object-shape-tester';
import {assertValidAuthToken, AuthTokenValidationError, type AuthToken} from './auth-tokens.js';

describe(assertValidAuthToken.name, () => {
    itCases(assertValidAuthToken, [
        {
            it: 'accepts a valid token',
            inputs: [
                {
                    authTokenName: 'mock name',
                    authTokenSecret: 'mock secret',
                } satisfies AuthToken,
                'mock service',
            ],
            throws: undefined,
        },
        {
            it: 'rejects an empty name',
            inputs: [
                {
                    authTokenName: '',
                    authTokenSecret: 'mock secret',
                } satisfies AuthToken,
                'mock service',
            ],
            throws: {
                matchConstructor: AuthTokenValidationError,
                matchMessage: 'Empty auth token name',
            },
        },
        {
            it: 'rejects an empty secret',
            inputs: [
                {
                    authTokenName: 'mock name',
                    authTokenSecret: '',
                } satisfies AuthToken,
                'mock service',
            ],
            throws: {
                matchConstructor: AuthTokenValidationError,
                matchMessage: 'Empty auth token secret',
            },
        },
        {
            it: 'rejects an invalid shape',
            inputs: [
                {
                    wrong: 4,
                },
                'mock service',
            ],
            throws: {
                matchConstructor: ShapeMismatchError,
            },
        },
    ]);
});
