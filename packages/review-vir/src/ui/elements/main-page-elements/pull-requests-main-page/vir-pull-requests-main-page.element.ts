import {getEnumValues} from '@augment-vir/common';
import {defineElement, html, nothing} from 'element-vir';
import {
    AuthTokensByService,
    SupportedServiceName,
} from '../../../../../../adapter-core/src/auth-store/auth-tokens.js';
import {WebClientInterface} from '../../../../services/web-client-interface/web-client-interface.js';
import {serviceElements} from './service-pull-requests/service-elements.js';

export const VirPullRequestsMainPage = defineElement<
    Readonly<{
        serviceAuthTokens: Readonly<AuthTokensByService>;
        webClientInterface: Readonly<WebClientInterface>;
    }>
>()({
    tagName: 'vir-pull-requests-main-page',
    renderCallback({inputs}) {
        const serviceTemplates = getEnumValues(SupportedServiceName).map((serviceName) => {
            const authTokens = inputs.serviceAuthTokens[serviceName];

            if (!authTokens?.length) {
                return nothing;
            }

            const serviceElement = serviceElements[serviceName];

            return html`
                <${serviceElement.assign({
                    authTokens,
                    webClientInterface: inputs.webClientInterface,
                })}></${serviceElement}>
            `;
        });

        return serviceTemplates;
    },
});
