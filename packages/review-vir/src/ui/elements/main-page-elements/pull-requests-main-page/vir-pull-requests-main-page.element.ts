import {getEnumTypedValues} from '@augment-vir/common';
import {defineElement, html, nothing} from 'element-vir';
import {AuthTokensByService, SupportedServiceName} from '../../../../data/auth-tokens';
import {WebClientInterface} from '../../../../services/web-client-interface/web-client-interface';
import {serviceElements} from './service-pull-requests.ts/service-elements';

export const VirPullRequestsMainPage = defineElement<
    Readonly<{
        serviceAuthTokens: Readonly<AuthTokensByService>;
        webClientInterface: Readonly<WebClientInterface>;
    }>
>()({
    tagName: 'vir-pull-requests-main-page',
    renderCallback({inputs}) {
        const serviceTemplates = getEnumTypedValues(SupportedServiceName).map((serviceName) => {
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
