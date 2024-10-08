import {assert} from '@augment-vir/assert';
import {getObjectTypedKeys, mapObjectValues, randomString} from '@augment-vir/common';
import {
    AuthToken,
    AuthTokensByService,
    authTokensByServiceShape,
} from '../../../../data/auth-tokens.js';
import {
    loadServiceAuthTokens,
    reviewVirAuthTokensStore,
    saveServiceAuthTokens,
} from './auth-store.client.js';

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

            assert.isLengthExactly(Object.keys(tokens), 0);
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
                assert.strictEquals(loadedToken, testTokensByService[serviceName]);
            });
        }),
    );
});
