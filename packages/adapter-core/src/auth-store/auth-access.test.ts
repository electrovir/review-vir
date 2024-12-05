import {assert} from '@augment-vir/assert';
import {AnyObject, randomString} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {
    loadServiceAuthTokens,
    reviewVirAuthTokensStore,
    saveServiceAuthTokens,
} from './auth-access.js';
import {type AuthToken} from './auth-tokens.js';

function runAuthTokenTest(testCallback: () => Promise<void>) {
    return async () => {
        await reviewVirAuthTokensStore.clear();
        await testCallback();
        await reviewVirAuthTokensStore.clear();
    };
}

const mockEncryptionKey = randomString(32);
const mockServiceName = 'github';

describe(loadServiceAuthTokens.name, () => {
    it(
        'loads nothing if nothing is saved',
        runAuthTokenTest(async () => {
            const tokens = await loadServiceAuthTokens({
                serviceName: mockServiceName,
                secretEncryptionKey: mockEncryptionKey,
            });

            assert.isEmpty(Object.keys(tokens));
        }),
    );
    it('uses dev auth tokens', async () => {
        const secretsFile = {
            authTokens: {
                [mockServiceName]: [
                    {
                        authTokenName: 'mock token name',
                        authTokenSecret: 'mock token secret',
                    } satisfies AuthToken,
                ],
            },
        };

        (globalThis as AnyObject)['VITE_INJECTED_SECRETS_FILE'] = secretsFile;

        const loadedAuthTokens = await loadServiceAuthTokens({
            serviceName: mockServiceName,
            secretEncryptionKey: mockEncryptionKey,
        });

        assert.deepEquals(loadedAuthTokens, secretsFile.authTokens[mockServiceName]);
    });
    it('handles empty token secret', async () => {
        await saveServiceAuthTokens({
            authTokens: [
                {
                    authTokenName: 'invalid secret',
                    authTokenSecret: '',
                },
            ],
            secretEncryptionKey: mockEncryptionKey,
            serviceName: mockServiceName,
        });

        assert.isNotEmpty(await reviewVirAuthTokensStore.keys());

        assert.isEmpty(
            await loadServiceAuthTokens({
                serviceName: mockServiceName,
                secretEncryptionKey: mockEncryptionKey,
            }),
        );

        assert.isEmpty(await reviewVirAuthTokensStore.keys());
    });
    it('handles invalid saved token', async () => {
        await saveServiceAuthTokens({
            authTokens: [
                {
                    authTokenName: 'invalid secret',
                    authTokenSecret: '',
                    // @ts-expect-error: invalid key
                    invalidKey: 4,
                },
            ],
            secretEncryptionKey: mockEncryptionKey,
            serviceName: mockServiceName,
        });

        assert.isNotEmpty(await reviewVirAuthTokensStore.keys());

        assert.isEmpty(
            await loadServiceAuthTokens({
                serviceName: mockServiceName,
                secretEncryptionKey: mockEncryptionKey,
            }),
        );

        assert.isEmpty(await reviewVirAuthTokensStore.keys());
    });
    it(
        'loads saved tokens',
        runAuthTokenTest(async () => {
            const mockAuthTokens: AuthToken[] = [
                {
                    authTokenName: randomString(16),
                    authTokenSecret: randomString(128),
                },
            ];

            await saveServiceAuthTokens({
                serviceName: mockServiceName,
                authTokens: mockAuthTokens,
                secretEncryptionKey: mockEncryptionKey,
            });

            const loadedAuthTokens = await loadServiceAuthTokens({
                serviceName: mockServiceName,
                secretEncryptionKey: mockEncryptionKey,
            });

            assert.deepEquals(loadedAuthTokens, mockAuthTokens);
        }),
    );
});

describe(saveServiceAuthTokens.name, () => {
    it('rejects empty encryption key', async () => {
        await assert.throws(
            () =>
                saveServiceAuthTokens({
                    authTokens: [],
                    secretEncryptionKey: '',
                    serviceName: mockServiceName,
                }),
            {
                matchMessage: 'Missing encryption key',
            },
        );
    });
    it('wipes the service if saving an empty array', async () => {
        await saveServiceAuthTokens({
            authTokens: [
                {
                    authTokenName: 'mock name',
                    authTokenSecret: 'mock secret',
                },
            ],
            secretEncryptionKey: mockEncryptionKey,
            serviceName: mockServiceName,
        });

        assert.isLengthExactly(await reviewVirAuthTokensStore.keys(), 1);

        await saveServiceAuthTokens({
            authTokens: [],
            secretEncryptionKey: mockEncryptionKey,
            serviceName: mockServiceName,
        });
        assert.isEmpty(await reviewVirAuthTokensStore.keys());
    });
});
