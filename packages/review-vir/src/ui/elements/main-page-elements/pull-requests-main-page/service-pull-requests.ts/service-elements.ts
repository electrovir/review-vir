import {DeclarativeElementDefinition} from 'element-vir';
import {AuthToken, SupportedServiceName} from '../../../../../data/auth-tokens';
import {WebClientInterface} from '../../../../../services/web-client-interface/web-client-interface';
import {VirGithubPullRequests} from './vir-github-pull-requests.element';

export const serviceElements: Readonly<
    Record<
        SupportedServiceName,
        DeclarativeElementDefinition<
            any,
            Readonly<{
                authTokens: ReadonlyArray<Readonly<AuthToken>>;
                webClientInterface: Readonly<WebClientInterface>;
            }>,
            any,
            any,
            any,
            any,
            any
        >
    >
> = {
    [SupportedServiceName.Github]: VirGithubPullRequests,
};
