import {copyThroughJson, filterOutIndexes, makeWritable} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {
    CloseX24Icon,
    ViraButton,
    ViraButtonStyleEnum,
    ViraIcon,
    ViraInput,
    noNativeFormStyles,
    noNativeSpacing,
} from 'vira';
import {AuthToken, SupportedServiceName} from '../../../../data/auth-tokens';
import {VirErrorMessage} from '../../common-elements/vir-error-message.element';
import {tokenDescriptions} from './token-descriptions';

export type AuthTokenEntryError = {
    serviceName: SupportedServiceName;
    authTokenIndex: number;
    message: string;
};

export const VirServiceAuthTokenEntry = defineElement<{
    authTokenEntryError: Readonly<AuthTokenEntryError> | undefined;
    serviceName: SupportedServiceName;
    authTokens: ReadonlyArray<Readonly<AuthToken>>;
}>()({
    tagName: 'vir-service-auth-token-entry',
    styles: css`
        :host,
        .tokens {
            box-sizing: border-box;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .auth-token-entry {
            display: flex;
            gap: 4px 16px;
            flex-wrap: wrap;
        }

        p {
            ${noNativeSpacing};
        }

        h2 {
            ${noNativeSpacing};
        }

        .with-delete-wrapper {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .delete {
            ${noNativeFormStyles};
            cursor: pointer;
        }

        .delete:hover {
            color: red;
        }

        .description td:first-child {
            padding-right: 16px;
        }

        .description table {
            margin-left: 16px;
        }
    `,
    events: {
        authTokensChange: defineElementEvent<ReadonlyArray<Readonly<AuthToken>>>(),
    },
    renderCallback({inputs, events, dispatch}) {
        const authTokenTemplates = inputs.authTokens.map((authToken, authTokenIndex) => {
            const isErrorRelevant =
                inputs.authTokenEntryError?.authTokenIndex === authTokenIndex &&
                inputs.authTokenEntryError.serviceName === inputs.serviceName;

            const errorTemplate = isErrorRelevant
                ? html`
                      <${VirErrorMessage}>${inputs.authTokenEntryError.message}</${VirErrorMessage}>
                  `
                : nothing;

            function modifyAuthToken(fieldToEdit: keyof AuthToken, value: string) {
                const newAuthTokens = copyThroughJson(inputs.authTokens);
                const authTokenToEdit = newAuthTokens[authTokenIndex];

                if (!authTokenToEdit) {
                    throw new Error('Failed to find auth token to edit');
                }

                makeWritable(authTokenToEdit)[fieldToEdit] = value;

                dispatch(new events.authTokensChange(newAuthTokens));
            }

            return html`
                <div class="auth-token-entry">
                    ${errorTemplate}
                    <label>
                        <p>Token name</p>
                        <${ViraInput.assign({
                            value: authToken.authTokenName,
                        })}
                            ${listen(ViraInput.events.valueChange, (event) => {
                                modifyAuthToken('authTokenName', event.detail);
                            })}
                        ></${ViraInput}>
                    </label>
                    <label>
                        <p>Token Secret</p>
                        <div class="with-delete-wrapper">
                            <${ViraInput.assign({
                                value: authToken.authTokenSecret,
                            })}
                                ${listen(ViraInput.events.valueChange, (event) => {
                                    modifyAuthToken('authTokenSecret', event.detail);
                                })}
                            ></${ViraInput}>
                            <button
                                class="delete"
                                ${listen('click', () => {
                                    const newAuthTokens = filterOutIndexes(
                                        copyThroughJson(inputs.authTokens),
                                        [authTokenIndex],
                                    );

                                    dispatch(new events.authTokensChange(newAuthTokens));
                                })}
                            >
                                <${ViraIcon.assign({icon: CloseX24Icon})}></${ViraIcon}>
                            </button>
                        </div>
                    </label>
                </div>
            `;
        });

        const tokenDescription = tokenDescriptions[inputs.serviceName];

        const permissionRows = tokenDescription.permissions.map(
            (permission) => html`
                <tr>
                    <td>${permission.label}</td>
                    <td>${permission.value}</td>
                </tr>
            `,
        );

        return html`
            <h2>${inputs.serviceName}</h2>
            <section class="description">
                <p>${tokenDescription.intro}</p>
                <table>${permissionRows}</table>
            </section>
            <section class="tokens">${authTokenTemplates}</section>
            <${ViraButton.assign({
                text: 'Add',
                buttonStyle: ViraButtonStyleEnum.Outline,
            })}
                ${listen('click', () => {
                    dispatch(
                        new events.authTokensChange(
                            inputs.authTokens.concat({authTokenName: '', authTokenSecret: ''}),
                        ),
                    );
                })}
            ></${ViraButton}>
        `;
    },
});
