import {AuthToken} from './auth-tokens.js';

declare let VITE_INJECTED_SECRETS_FILE:
    | {authTokens?: {[ServiceName in string]: AuthToken[]}}
    | undefined;
declare let VITE_INJECTED_ENCRYPTION_KEY: string | undefined;

export function getGitAdapterGlobalVars() {
    const viteInjectedSecretsFile =
        typeof VITE_INJECTED_SECRETS_FILE === 'undefined' ? undefined : VITE_INJECTED_SECRETS_FILE;
    const viteInjectedEncryptionKey =
        typeof VITE_INJECTED_ENCRYPTION_KEY === 'undefined'
            ? undefined
            : VITE_INJECTED_ENCRYPTION_KEY;

    return {
        devAuthTokens: viteInjectedSecretsFile?.authTokens,
        encryptionKey: viteInjectedEncryptionKey,
    };
}
