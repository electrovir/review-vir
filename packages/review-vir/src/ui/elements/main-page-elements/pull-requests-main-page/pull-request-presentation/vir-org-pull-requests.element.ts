import {isTruthy} from '@augment-vir/common';
import {HTMLTemplateResult, css, defineElement, html, nothing} from 'element-vir';
import {
    ChainedPullRequest,
    organizeChainedPullRequests,
} from '../../../../../data/git/chained-pull-requests';
import {OwnedPullRequests} from '../../../../../data/git/pull-request-organization';
import {User} from '../../../../../data/git/user';
import {VirUser} from '../../../common-elements/vir-user.element';
import {VirPullRequest} from './vir-pull-request.element';

export const VirOrgPullRequests = defineElement<{
    user: Readonly<User>;
    ownedPullRequests: Readonly<OwnedPullRequests>;
}>()({
    tagName: 'vir-org-pull-requests',
    styles: css`
        .wrapper {
            display: flex;
            flex-direction: column;
            width: 600px;
            max-width: 100%;
            margin: 0 16px 16px;
        }

        .pull-requests {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    `,
    renderCallback({inputs}) {
        const sections = [
            {title: 'Reviewer', pullRequests: inputs.ownedPullRequests.pullRequests.reviewer},
            {title: 'Assigned', pullRequests: inputs.ownedPullRequests.pullRequests.assigned},
            // {title: 'Closed', pullRequests: inputs.ownedPullRequests.pullRequests.closed},
        ];

        const sectionTemplates = sections
            .map((section) => {
                const chainedPullRequests = organizeChainedPullRequests(section.pullRequests);

                const pullRequestTemplates = chainedPullRequests.flatMap((entry) =>
                    createFlattenedChainedPullRequestTemplates(entry, inputs.user),
                );
                if (!pullRequestTemplates.length) {
                    return nothing;
                }

                return html`
                    <section class="pull-request-section">
                        <h3>${section.title} (${pullRequestTemplates.length})</h3>
                        <div class="pull-requests">${pullRequestTemplates}</div>
                    </section>
                `;
            })
            .filter(isTruthy);

        if (!sectionTemplates.length) {
            return nothing;
        }

        return html`
            <div class="wrapper">
                <h2>
                    <${VirUser.assign({
                        user: inputs.ownedPullRequests.owner,
                        show: {
                            avatar: true,
                            username: true,
                        },
                    })}></${VirUser}>
                </h2>
                ${sectionTemplates}
            </div>
        `;
    },
});

function createFlattenedChainedPullRequestTemplates(
    chainedPullRequest: ChainedPullRequest,
    user: Readonly<User>,
    isChained?: boolean | undefined,
): HTMLTemplateResult[] {
    const childrenTemplates = chainedPullRequest.children.flatMap((child) =>
        createFlattenedChainedPullRequestTemplates(child, user, true),
    );

    return [
        html`
            <${VirPullRequest.assign({
                user,
                pullRequest: chainedPullRequest.pullRequest,
                nested: !!isChained,
            })}></${VirPullRequest}>
        `,
        ...childrenTemplates,
    ];
}
