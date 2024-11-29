import {check} from '@augment-vir/assert';
import localForage from 'localforage-esm';
import {isValidShape} from 'object-shape-tester';
import {
    assertValidAuthToken,
    authTokenShape,
    type AuthToken,
    type EncryptedAuthToken,
} from './auth-tokens.js';
import {decrypt, encrypt} from './encryption.js';
import {getGitAdapterGlobalVars} from './global-vars.js';

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
    serviceName,
    secretEncryptionKey,
}: Readonly<{
    serviceName: string;
    secretEncryptionKey: string;
}>): Promise<ReadonlyArray<Readonly<AuthToken>>> {
    try {
        /** Only applicable in dev. Might not exist. */
        const serviceAuthTokensFromDevFile: ReadonlyArray<Readonly<AuthToken>> | undefined =
            getGitAdapterGlobalVars().devAuthTokens?.[serviceName];

        const encryptedTokens: ReadonlyArray<Readonly<EncryptedAuthToken>> | undefined =
            (await reviewVirAuthTokensStore.getItem(serviceName)) || undefined;

        if (!encryptedTokens) {
            if (serviceAuthTokensFromDevFile?.length) {
                return serviceAuthTokensFromDevFile;
            } else {
                return [];
            }
        }

        const decryptedServiceTokens: ReadonlyArray<Readonly<AuthToken>> = (
            await Promise.all(
                encryptedTokens.map(async (encryptedToken) => {
                    const token = await decryptToken(secretEncryptionKey, encryptedToken);

                    assertValidAuthToken(token, serviceName);
                    return token;
                }),
            )
        ).filter(check.isTruthy);

        return decryptedServiceTokens;
    } catch {
        console.error('Failed to load auth tokens. Wiping store.');
        await reviewVirAuthTokensStore.removeItem(serviceName);
        return [];
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
    serviceName,
    secretEncryptionKey,
    authTokens,
}: Readonly<{
    serviceName: string;
    secretEncryptionKey: string | undefined;
    authTokens: ReadonlyArray<Readonly<AuthToken>> | undefined;
}>) {
    if (!secretEncryptionKey) {
        throw new Error('Missing encryption key.');
    }

    if (authTokens?.length) {
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
}
