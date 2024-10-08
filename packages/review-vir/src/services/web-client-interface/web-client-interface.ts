import {awaitAllClients, defineClientInterface} from 'generic-client-interface';

const webClients = defineClientInterface({
    github: () => import('./clients/github/github-client/github.client'),
    authStore: () => import('./clients/auth-store/auth-store.client'),
});

export async function loadWebClientInterface() {
    return awaitAllClients(webClients);
}
export type WebClientInterface = Readonly<Awaited<ReturnType<typeof loadWebClientInterface>>>;
