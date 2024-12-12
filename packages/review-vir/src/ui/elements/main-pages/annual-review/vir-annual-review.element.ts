import {extractErrorMessage} from '@augment-vir/common';
import {
    asyncProp,
    AsyncProp,
    css,
    defineElement,
    html,
    isAsyncError,
    isResolved,
    renderAsync,
} from 'element-vir';
import {LoaderAnimated24Icon, ViraIcon} from 'vira';
import {fetchAnnualReview} from '../../../../data/annual-review.js';
import {ServiceAuthTokens} from '../../../../data/auth-tokens.js';
import {ReviewVirRouter} from '../../../../data/routing.js';
import {AppSettings} from '../../../../data/settings.js';
import {VirErrorMessage} from '../../common-elements/vir-error-message.element.js';
import {VirHeader} from '../../common-elements/vir-header.element.js';
import {VirAnnualReviewPullRequest} from './vir-annual-review-pull-request.element.js';

export const VirAnnualReview = defineElement<{
    currentAppSettings: AsyncProp<AppSettings, any>;
    router: Readonly<ReviewVirRouter>;
}>()({
    tagName: 'vir-annual-review',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        .loading {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .pull-request-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    `,
    stateInitStatic: {
        annualReview: asyncProp({
            updateCallback({authTokens}: {authTokens: ServiceAuthTokens}) {
                return fetchAnnualReview(authTokens);
            },
        }),
    },
    render({inputs, state}) {
        if (
            isResolved(inputs.currentAppSettings.value) &&
            !isAsyncError(inputs.currentAppSettings.value)
        ) {
            state.annualReview.update({
                authTokens: inputs.currentAppSettings.value.authTokens,
            });
        }

        const dataTemplate = renderAsync(
            state.annualReview,
            html`
                <div class="loading">
                    <${ViraIcon.assign({icon: LoaderAnimated24Icon})}></${ViraIcon}>
                    Loading annual review...
                </div>
            `,
            (data) => {
                const pullRequestTemplates = data.map(
                    (pullRequest) => html`
                        <${VirAnnualReviewPullRequest.assign({
                            pullRequest,
                        })}></${VirAnnualReviewPullRequest}>
                    `,
                );

                return html`
                    <section class="pull-request-list">${pullRequestTemplates}</section>
                `;
            },
            (error) => {
                return html`
                    <${VirErrorMessage}>${extractErrorMessage(error)}</${VirErrorMessage}>
                `;
            },
        );

        return html`
            <${VirHeader.assign({router: inputs.router})}></${VirHeader}>
            ${dataTemplate}
        `;
    },
});
