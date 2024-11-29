import {assert} from '@augment-vir/assert';
import type {AnyObject} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import type {AuthToken} from './auth-tokens.js';
import {getGitAdapterGlobalVars} from './global-vars.js';

describe('gitAdapterGlobalVars', () => {
    it('handles missing globals', () => {
        assert.isUndefined(getGitAdapterGlobalVars().devAuthTokens);
        assert.isUndefined(getGitAdapterGlobalVars().encryptionKey);
    });

    it('loads the encryption key', () => {
        try {
            const encryptionKey = 'some value';

            (globalThis as AnyObject)['VITE_INJECTED_ENCRYPTION_KEY'] = encryptionKey;

            assert.strictEquals(getGitAdapterGlobalVars().encryptionKey, encryptionKey);
        } finally {
            delete (globalThis as AnyObject)['VITE_INJECTED_ENCRYPTION_KEY'];
        }
    });

    it('loads the secrets file', () => {
        try {
            const secretsFile = {
                authTokens: {
                    github: [
                        {
                            authTokenName: 'mock token name',
                            authTokenSecret: 'mock token secret',
                        } satisfies AuthToken,
                    ],
                },
            };

            (globalThis as AnyObject)['VITE_INJECTED_SECRETS_FILE'] = secretsFile;

            assert.strictEquals(getGitAdapterGlobalVars().devAuthTokens, secretsFile.authTokens);
        } finally {
            delete (globalThis as AnyObject)['VITE_INJECTED_SECRETS_FILE'];
        }
    });
});
