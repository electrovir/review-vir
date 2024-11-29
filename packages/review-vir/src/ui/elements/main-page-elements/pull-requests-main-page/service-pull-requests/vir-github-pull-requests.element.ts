import {css, defineElement, html, nothing} from 'element-vir';
import {LoaderAnimated24Icon, ViraIcon} from 'vira';
import {AuthToken} from '../../../../../../../adapter-core/src/auth-store/auth-tokens.js';
import {organizePullRequestsByOwner} from '../../../../../data/git/pull-request-organization.js';
import {PullRequest} from '../../../../../data/git/pull-request.js';
import {User} from '../../../../../data/git/user.js';
import {GitDataChangeEvent} from '../../../../../services/web-client-interface/git-client/git-client-events.js';
import {AutoUpdatingGitClient} from '../../../../../services/web-client-interface/git-client/git-service-client.js';
import {WebClientInterface} from '../../../../../services/web-client-interface/web-client-interface.js';
import {VirOrgPullRequests} from '../pull-request-presentation/vir-org-pull-requests.element.js';

export const VirGithubPullRequests = defineElement<{
    authTokens: ReadonlyArray<Readonly<AuthToken>>;
    webClientInterface: Readonly<WebClientInterface>;
}>()({
    tagName: 'vir-github-pull-requests',
    styles: css`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `,
    stateInitStatic: {
        githubClient: undefined as Readonly<AutoUpdatingGitClient> | undefined,
        pullRequests: undefined as ReadonlyArray<Readonly<PullRequest> | Error> | undefined,
        user: undefined as Readonly<User> | undefined,
    },
    renderCallback({state, updateState, inputs}) {
        if (!state.githubClient) {
            const newClient = inputs.webClientInterface.github.init(inputs.authTokens);
            updateState({githubClient: newClient});
            newClient.listen(GitDataChangeEvent, (event) => {
                updateState({
                    user: event.detail.user,
                    pullRequests: event.detail.pullRequests,
                });
            });
            return nothing;
        }

        const user = state.user;

        if (!user) {
            return html`
                <${ViraIcon.assign({icon: LoaderAnimated24Icon})}></${ViraIcon}>
            `;
        }

        const organizedPullRequests = organizePullRequestsByOwner(
            user,
            state.pullRequests?.filter(
                (entry): entry is PullRequest => !(entry instanceof Error),
            ) || [],
        );

        const pullRequestTemplates = Object.values(organizedPullRequests).map(
            (ownedPullRequests) => {
                return html`
                    <${VirOrgPullRequests.assign({
                        user,
                        ownedPullRequests,
                    })}></${VirOrgPullRequests}>
                `;
            },
        );

        return pullRequestTemplates;
    },
});
