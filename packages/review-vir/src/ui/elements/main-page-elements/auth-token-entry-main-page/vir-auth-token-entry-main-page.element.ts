import {check} from '@augment-vir/assert';
import {extractErrorMessage, getEnumValues} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {ViraButton, ViraButtonStyleEnum} from 'vira';
import {
    AuthTokenValidationError,
    AuthTokensByService,
    SupportedServiceName,
    assertValidAuthTokens,
} from '../../../../../../adapter-core/src/auth-store/auth-tokens.js';
import {defaultReviewVirFullRoute} from '../../../../data/routing/vir-route.js';
import {ChangeRouteEvent} from '../../../events/change-route.event.js';
import {
    AuthTokenEntryError,
    VirServiceAuthTokenEntry,
} from './vir-service-auth-token-entry.element.js';

export const VirAuthTokenEntryMainPage = defineElement<{
    authTokens: Readonly<AuthTokensByService>;
}>()({
    tagName: 'vir-auth-token-entry-main-page',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 0 32px;
            box-sizing: border-box;
        }

        .services {
            display: flex;
        }

        .actions {
            display: flex;
            gap: 16px;
            justify-content: center;
        }
    `,
    events: {
        authTokensByServiceChange: defineElementEvent<Readonly<AuthTokensByService>>(),
    },
    stateInitStatic: {
        currentAuthTokenEntry: undefined as Readonly<AuthTokensByService> | undefined,
        errorMessage: undefined as AuthTokenEntryError | string | undefined,
    },
    renderCallback({inputs, state, updateState, dispatch, events}) {
        if (!state.currentAuthTokenEntry) {
            updateState({currentAuthTokenEntry: inputs.authTokens});
        }

        const serviceAuthTokenEntryTemplates = getEnumValues(SupportedServiceName).map(
            (serviceName) => {
                const currentAuthTokens = state.currentAuthTokenEntry?.[serviceName];

                const authTokens = currentAuthTokens?.length
                    ? currentAuthTokens
                    : [
                          {
                              authTokenName: '',
                              authTokenSecret: '',
                          },
                      ];

                const authTokenEntryError =
                    check.isObject(state.errorMessage) &&
                    state.errorMessage.serviceName === serviceName
                        ? state.errorMessage
                        : undefined;

                return html`
                    <${VirServiceAuthTokenEntry.assign({
                        authTokenEntryError,
                        authTokens,
                        serviceName,
                    })}
                        ${listen(VirServiceAuthTokenEntry.events.authTokensChange, (event) => {
                            updateState({
                                currentAuthTokenEntry: {
                                    ...state.currentAuthTokenEntry,
                                    [serviceName]: event.detail,
                                },
                            });
                        })}
                    ></${VirServiceAuthTokenEntry}>
                `;
            },
        );

        return html`
            <section class="services">${serviceAuthTokenEntryTemplates}</section>
            <section class="actions">
                <${ViraButton.assign({
                    text: 'Cancel',
                    buttonStyle: ViraButtonStyleEnum.Outline,
                })}
                    ${listen('click', () => {
                        updateState({
                            currentAuthTokenEntry: inputs.authTokens,
                        });
                        dispatch(
                            new ChangeRouteEvent({
                                route: defaultReviewVirFullRoute,
                            }),
                        );
                    })}
                ></${ViraButton}>
                <${ViraButton.assign({
                    text: 'Save',
                })}
                    ${listen('click', () => {
                        try {
                            assertValidAuthTokens(state.currentAuthTokenEntry);
                        } catch (error) {
                            if (error instanceof AuthTokenValidationError) {
                                updateState({
                                    errorMessage: {
                                        message: error.message,
                                        authTokenIndex: error.authTokenIndex,
                                        serviceName: error.serviceName,
                                    },
                                });
                            } else {
                                updateState({
                                    errorMessage: extractErrorMessage(error),
                                });
                            }

                            return;
                        }

                        dispatch(new events.authTokensByServiceChange(state.currentAuthTokenEntry));
                        dispatch(
                            new ChangeRouteEvent({
                                route: defaultReviewVirFullRoute,
                            }),
                        );
                    })}
                ></${ViraButton}>
            </section>
        `;
    },
});
