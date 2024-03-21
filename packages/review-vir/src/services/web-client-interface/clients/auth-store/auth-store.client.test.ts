import {getObjectTypedKeys, mapObjectValues, randomString} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {
    AuthToken,
    AuthTokensByService,
    authTokensByServiceShape,
} from '../../../../data/auth-tokens';
import {
    loadServiceAuthTokens,
    reviewVirAuthTokensStore,
    saveServiceAuthTokens,
} from './auth-store.client';

function runAuthTokenTest(testCallback: () => Promise<void>) {
    return async () => {
        await reviewVirAuthTokensStore.clear();
        await testCallback();
        await reviewVirAuthTokensStore.clear();
    };
}

const testEncryptionKey = randomString(32);

describe(loadServiceAuthTokens.name, () => {
    it(
        'loads nothing if nothing is saved',
        runAuthTokenTest(async () => {
            const tokens = await loadServiceAuthTokens({secretEncryptionKey: testEncryptionKey});

            assert.lengthOf(Object.keys(tokens), 0);
        }),
    );
    it(
        'loads saved tokens',
        runAuthTokenTest(async () => {
            const testTokensByService: AuthTokensByService = mapObjectValues(
                authTokensByServiceShape.defaultValue,
                (): AuthToken[] => {
                    return [
                        {
                            authTokenName: randomString(16),
                            authTokenSecret: randomString(128),
                        },
                    ];
                },
            );

            await saveServiceAuthTokens({
                authTokensByService: testTokensByService,
                secretEncryptionKey: testEncryptionKey,
            });

            const loadedValues = await loadServiceAuthTokens({
                secretEncryptionKey: testEncryptionKey,
            });

            getObjectTypedKeys(loadedValues).forEach((serviceName) => {
                const loadedToken = loadedValues[serviceName];
                assert.strictEqual(loadedToken, testTokensByService[serviceName]);
            });
        }),
    );
});
