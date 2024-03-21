import {awaitAllClients, defineClientInterface} from 'generic-client-interface';

const webClients = defineClientInterface({
    clientImports: {
        github: () => import('./clients/github/github-client/github.client'),
        authStore: () => import('./clients/auth-store/auth-store.client'),
    },
    isTestEnv: false,
});

export async function loadWebClientInterface() {
    return awaitAllClients(webClients);
}
export type WebClientInterface = Readonly<Awaited<ReturnType<typeof loadWebClientInterface>>>;
