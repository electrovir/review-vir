import {DeclarativeElementDefinition} from 'element-vir';
import {
    AuthToken,
    SupportedServiceName,
} from '../../../../../../../adapter-core/src/auth-store/auth-tokens.js';
import {WebClientInterface} from '../../../../../services/web-client-interface/web-client-interface.js';
import {VirGithubPullRequests} from './vir-github-pull-requests.element.js';

export const serviceElements: Readonly<
    Record<
        SupportedServiceName,
        DeclarativeElementDefinition<
            any,
            Readonly<{
                authTokens: ReadonlyArray<Readonly<AuthToken>>;
                webClientInterface: Readonly<WebClientInterface>;
            }>
        >
    >
> = {
    [SupportedServiceName.Github]: VirGithubPullRequests,
};
