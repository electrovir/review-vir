import {check} from '@augment-vir/assert';
import {getEnumValues, typedObjectFromEntries} from '@augment-vir/common';
import {globalVars} from '@review-vir/review-vir/src/data/global-vars';
import {defineClient} from 'generic-client-interface';
import localForage from 'localforage-esm';
import {isValidShape} from 'object-shape-tester';
import {
    AuthToken,
    AuthTokensByService,
    EncryptedAuthToken,
    SupportedServiceName,
    authTokenShape,
} from '../../../../data/auth-tokens.js';
import {decrypt, encrypt} from '../../../../util/encryption.js';

export const reviewVirAuthTokensStore = localForage.createInstance({
    description: 'Store for review-vir auth tokens.',
    name: 'review-vir-auth-tokens',
    storeName: 'review-vir-auth-tokens',
});

async function decryptToken(
    secretEncryptionKey: string,
    encryptedToken: EncryptedAuthToken,
): Promise<Readonly<AuthToken> | undefined> {
    const decryptedJson = await decrypt({
        secretEncryptionKey,
        encryptedData: encryptedToken.data,
        publicInitVector: encryptedToken.publicInitVector,
    });

    const authToken = JSON.parse(decryptedJson);

    return isValidShape(authToken, authTokenShape) ? authToken : undefined;
}

export async function loadServiceAuthTokens({
    secretEncryptionKey,
}: {
    secretEncryptionKey: string;
}): Promise<AuthTokensByService> {
    try {
        return typedObjectFromEntries(
            (
                await Promise.all(
                    getEnumValues(SupportedServiceName).map(
                        async (
                            serviceName,
                        ): Promise<
                            [SupportedServiceName, ReadonlyArray<Readonly<AuthToken>>] | undefined
                        > => {
                            const serviceAuthTokensFromDevFile:
                                | ReadonlyArray<Readonly<AuthToken>>
                                | undefined = globalVars.devAuthTokens[serviceName];

                            const encryptedTokens:
                                | ReadonlyArray<Readonly<EncryptedAuthToken>>
                                | undefined =
                                (await reviewVirAuthTokensStore.getItem(serviceName)) || undefined;

                            if (!encryptedTokens) {
                                return serviceAuthTokensFromDevFile?.length
                                    ? [
                                          serviceName,
                                          serviceAuthTokensFromDevFile,
                                      ]
                                    : undefined;
                            }

                            const decryptedServiceTokens: ReadonlyArray<Readonly<AuthToken>> = (
                                await Promise.all(
                                    encryptedTokens.map(async (encryptedToken) => {
                                        return await decryptToken(
                                            secretEncryptionKey,
                                            encryptedToken,
                                        );
                                    }),
                                )
                            ).filter(check.isTruthy);

                            return [
                                serviceName,
                                decryptedServiceTokens,
                            ];
                        },
                    ),
                )
            ).filter(check.isTruthy),
        );
    } catch {
        console.error('Failed to load auth tokens. Wiping store.');
        await reviewVirAuthTokensStore.clear();
        return {};
    }
}

async function encryptAuthToken({
    secretEncryptionKey,
    authToken,
}: {
    secretEncryptionKey: string;
    authToken: Readonly<AuthToken>;
}): Promise<EncryptedAuthToken> {
    const {encryptedData, publicInitVector} = await encrypt({
        data: JSON.stringify(authToken),
        secretEncryptionKey,
    });

    return {
        data: encryptedData,
        publicInitVector,
    };
}

export async function saveServiceAuthTokens({
    secretEncryptionKey,
    authTokensByService,
}: Readonly<{
    secretEncryptionKey: string | undefined;
    authTokensByService: Readonly<AuthTokensByService>;
}>) {
    if (!secretEncryptionKey) {
        throw new Error('Missing encryption key.');
    }

    await Promise.all(
        getEnumValues(SupportedServiceName).map(async (serviceName) => {
            const authTokens = authTokensByService[serviceName];

            if (authTokens) {
                const encryptedAuthTokens = await Promise.all(
                    authTokens.map(async (authToken): Promise<Readonly<EncryptedAuthToken>> => {
                        return await encryptAuthToken({
                            secretEncryptionKey,
                            authToken,
                        });
                    }),
                );

                await reviewVirAuthTokensStore.setItem(serviceName, encryptedAuthTokens);
            } else {
                await reviewVirAuthTokensStore.removeItem(serviceName);
            }
        }),
    );
}

export const authStoreClient = defineClient({
    saveServiceAuthTokens,
    loadServiceAuthTokens,
});
