import {check} from '@augment-vir/assert';
import {extractErrorMessage} from '@augment-vir/common';
import {getGitAdapterGlobalVars} from '@review-vir/adapter-core';
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
import {countAuthTokens, loadAllAdapterAuthTokens} from '../../../data/auth-tokens.js';
import {
    ReviewVirFullRoute,
    ReviewVirMainPath,
    createReviewVirRouter,
    defaultReviewVirFullRoute,
} from '../../../data/routing.js';
import {AppSettings, loadSettings} from '../../../data/settings.js';
import {ChangeRouteEvent} from '../../events/change-route.event.js';
import {VirErrorMessage} from '../common-elements/vir-error-message.element.js';
import {VirCodeReview} from '../main-pages/code-review/vir-code-review.element.js';
import {VirAuthTokenEntry} from '../main-pages/settings/auth-token-entry/vir-auth-token-entry.element.js';
import {routeElements} from './route-elements.js';

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

        ${VirErrorMessage} {
            margin: 16px;
        }
        .hidden {
            display: none;
        }
    `,
    stateInitStatic: {
        appSettings: asyncProp({
            async updateCallback({
                secretEncryptionKey,
            }: {
                secretEncryptionKey: string | undefined;
            }): Promise<AppSettings> {
                if (!secretEncryptionKey) {
                    throw new Error('No encryption key found. Cannot run review-vir.');
                }

                return {
                    ...(await loadSettings()),
                    authTokens: await loadAllAdapterAuthTokens(secretEncryptionKey),
                };
            },
        }),
        router: createReviewVirRouter(),
        currentRoute: undefined as Readonly<ReviewVirFullRoute> | undefined,
    },
    init({state, updateState}) {
        state.router.listen(true, (route) => {
            updateState({currentRoute: route});
        });
    },
    render({state}) {
        const secretEncryptionKey = getGitAdapterGlobalVars().encryptionKey || '';

        state.appSettings.update({
            secretEncryptionKey,
        });
        const appSettings = state.appSettings.value;

        if (isAsyncError(appSettings)) {
            return html`
                <${VirErrorMessage}>${extractErrorMessage(appSettings)}</${VirErrorMessage}>
            `;
        }

        const currentRoute: Readonly<ReviewVirFullRoute> =
            (isResolved(appSettings) && countAuthTokens(appSettings.authTokens) === 0
                ? {
                      ...defaultReviewVirFullRoute,
                      paths: [ReviewVirMainPath.Settings],
                  }
                : state.currentRoute) || defaultReviewVirFullRoute;

        if (!state.currentRoute || !check.jsonEquals(currentRoute, state.currentRoute)) {
            state.router.setRoute(currentRoute);
        }

        const codeReviewTemplate = html`
            <${VirCodeReview.assign({
                router: state.router,
                secretEncryptionKey,
                currentRoute,
            })}
                class=${classMap({
                    hidden: currentRoute.paths[0] !== ReviewVirMainPath.CodeReview,
                })}
            ></${VirCodeReview}>
        `;

        const routedElement = routeElements[currentRoute.paths[0]];
        const routedElementTemplate = routedElement
            ? html`
                  <${routedElement.assign({
                      secretEncryptionKey,
                      currentAppSettings: state.appSettings,
                  })}></${routedElement}>
              `
            : nothing;

        return html`
            <div
                class="root"
                ${listen(ChangeRouteEvent, (event) => {
                    state.router.setRoute(event.detail);
                })}
                ${listen(VirAuthTokenEntry.events.authTokensChange, (event) => {
                    if (
                        !isResolved(state.appSettings.value) ||
                        isAsyncError(state.appSettings.value)
                    ) {
                        return;
                    }

                    state.appSettings.setValue({
                        ...state.appSettings.value,
                        authTokens: event.detail,
                    });
                })}
            >
                ${codeReviewTemplate} ${routedElementTemplate}
            </div>
        `;
    },
});
