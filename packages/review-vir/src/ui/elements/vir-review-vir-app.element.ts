import {check} from '@augment-vir/assert';
import {extractErrorMessage} from '@augment-vir/common';
import {
    asyncProp,
    classMap,
    css,
    defineElementNoInputs,
    html,
    isAsyncError,
    isResolved,
    listen,
    nothing,
} from 'element-vir';
import {LoaderAnimated24Icon, ViraIcon} from 'vira';
import {gitAdapterGlobalVars} from '../../../../adapter-core/src/auth-store/global-vars.js';
import {
    ReviewVirFullRoute,
    ReviewVirMainPath,
    createReviewVirRouter,
    defaultReviewVirFullRoute,
} from '../../data/routing/vir-route.js';
import {
    WebClientInterface,
    loadWebClientInterface,
} from '../../services/web-client-interface/web-client-interface.js';
import {ChangeRouteEvent} from '../events/change-route.event.js';
import {VirAppTabs} from './app-tabs/vir-app-tabs.element.js';
import {VirErrorMessage} from './common-elements/vir-error-message.element.js';
import {VirAuthTokenEntryMainPage} from './main-page-elements/auth-token-entry-main-page/vir-auth-token-entry-main-page.element.js';
import {VirPullRequestsMainPage} from './main-page-elements/pull-requests-main-page/vir-pull-requests-main-page.element.js';

export const VirReviewVirApp = defineElementNoInputs({
    tagName: 'vir-review-vir-app',
    styles: css`
        :host,
        .root {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            width: 100%;
            box-sizing: border-box;
            font-family: sans-serif;
            gap: 16px;
        }

        .hide-main-page {
            display: none;
        }

        ${VirAuthTokenEntryMainPage} {
            align-self: flex-start;
        }
    `,
    stateInitStatic: {
        serviceAuthTokens: asyncProp({
            updateCallback({
                secretEncryptionKey,
                webClientInterface,
            }: {
                secretEncryptionKey: string | undefined;
                webClientInterface: WebClientInterface;
            }) {
                if (!secretEncryptionKey) {
                    throw new Error('No encryption key.');
                }

                return webClientInterface.authStore.loadServiceAuthTokens({
                    secretEncryptionKey,
                });
            },
        }),
        webClientInterface: asyncProp({defaultValue: loadWebClientInterface()}),
        router: createReviewVirRouter(),
        currentRoute: undefined as Readonly<ReviewVirFullRoute> | undefined,
    },
    initCallback({state, updateState}) {
        state.router.listen(true, (route) => {
            updateState({currentRoute: route});
        });
    },
    renderCallback({state}) {
        const webClientInterface = state.webClientInterface.value;

        if (!isResolved(webClientInterface)) {
            return html`
                <${ViraIcon.assign({icon: LoaderAnimated24Icon})}></${ViraIcon}>
            `;
        } else if (isAsyncError(webClientInterface)) {
            return html`
                <${VirErrorMessage}>${extractErrorMessage(webClientInterface)}</${VirErrorMessage}>
            `;
        }

        state.serviceAuthTokens.update({
            secretEncryptionKey: gitAdapterGlobalVars.encryptionKey,
            webClientInterface,
        });
        const serviceAuthTokens = state.serviceAuthTokens.value;

        if (!isResolved(serviceAuthTokens)) {
            return html`
                <${ViraIcon.assign({icon: LoaderAnimated24Icon})}></${ViraIcon}>
            `;
        } else if (isAsyncError(serviceAuthTokens)) {
            return html`
                <${VirErrorMessage}>${extractErrorMessage(serviceAuthTokens)}</${VirErrorMessage}>
            `;
        }

        const currentRoute: Readonly<ReviewVirFullRoute> =
            Object.keys(serviceAuthTokens).length === 0
                ? {
                      ...defaultReviewVirFullRoute,
                      paths: [ReviewVirMainPath.Auth],
                  }
                : state.currentRoute || defaultReviewVirFullRoute;

        if (!state.currentRoute || !check.jsonEquals(currentRoute, state.currentRoute)) {
            state.router.setRoute(currentRoute);
        }

        const mainContentTemplate =
            currentRoute.paths[0] === ReviewVirMainPath.Auth
                ? html`
                      <${VirAuthTokenEntryMainPage.assign({
                          authTokens: serviceAuthTokens,
                      })}
                          ${listen(
                              VirAuthTokenEntryMainPage.events.authTokensByServiceChange,
                              async (event) => {
                                  await webClientInterface.authStore.saveServiceAuthTokens({
                                      secretEncryptionKey: gitAdapterGlobalVars.encryptionKey,
                                      authTokensByService: event.detail,
                                  });

                                  state.serviceAuthTokens.setValue(event.detail);
                              },
                          )}
                      ></${VirAuthTokenEntryMainPage}>
                  `
                : nothing;

        return html`
            <div
                class="root"
                ${listen(ChangeRouteEvent, (event) => {
                    state.router.setRoute(event.detail.route);
                })}
            >
                <${VirAppTabs.assign({
                    currentRoute,
                    router: state.router,
                })}></${VirAppTabs}>
                ${mainContentTemplate}
                <${VirPullRequestsMainPage.assign({
                    serviceAuthTokens,
                    webClientInterface,
                })}
                    class=${classMap({
                        /**
                         * Don't swap out this template, just hide it, because we want to keep it
                         * loaded.
                         */
                        'hide-main-page': currentRoute.paths[0] !== ReviewVirMainPath.PullRequests,
                    })}
                ></${VirPullRequestsMainPage}>
            </div>
        `;
    },
});
