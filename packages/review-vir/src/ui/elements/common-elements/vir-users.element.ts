import {css, defineElement, html} from 'element-vir';
import {PullRequestReview} from '../../../data/git/pull-request';
import {User} from '../../../data/git/user';
import {VirUser} from './vir-user.element';

export const VirUsers = defineElement<{
    users: ReadonlyArray<Readonly<User>>;
    holdStatusSpace?: boolean | undefined;
    reviews?:
        | undefined
        | Readonly<{
              [username in string]: Readonly<Omit<PullRequestReview, 'user'>> | undefined;
          }>;
    overlap: boolean;
}>()({
    tagName: 'vir-users',
    hostClasses: {
        'vir-users-overlap-icons': ({inputs}) => inputs.overlap,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            align-items: center;
            align-items: flex-start;
        }

        ${VirUser} {
            font-size: 20px;
        }

        ${hostClasses['vir-users-overlap-icons'].selector} ${VirUser} + ${VirUser} {
            margin-left: -10px;
        }
    `,
    renderCallback({inputs}) {
        const sortedUsers = [...inputs.users].sort((a, b) => a.username.localeCompare(b.username));

        const avatarTemplates = sortedUsers.map((user) => {
            return html`
                <${VirUser.assign({
                    user,
                    show: {
                        avatar: true,
                        username: false,
                        statusSpace: inputs.holdStatusSpace,
                    },
                    review: inputs.reviews?.[user.username],
                })}></${VirUser}>
            `;
        });

        return html`
            ${avatarTemplates}
        `;
    },
});
