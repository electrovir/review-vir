import {classMap, css, defineElement, html, nothing} from 'element-vir';
import {StatusFailure24Icon, StatusSuccess24Icon, ViraIcon, ViraIconSvg, ViraImage} from 'vira';
import {User} from '../../../data/git/user';

export const VirUser = defineElement<{
    user: Readonly<User>;
    show: {
        avatar: boolean;
        username: boolean;
        statusSpace?: boolean | undefined;
    };
    status?: {status: boolean; description: string} | undefined;
}>()({
    tagName: 'vir-user',
    styles: css`
        a {
            display: flex;
            align-items: center;
            gap: 0.3em;
        }

        ${ViraImage} {
            max-height: 1em;
            max-width: 1em;
            min-height: 1em;
            min-width: 1em;
            border-radius: 0.5em;
            background-color: white;
            border: 1px solid #eee;
        }

        ${ViraIcon} {
            color: red;
        }

        ${ViraIcon}.success {
            color: green;
        }

        .avatar {
            display: flex;
            flex-direction: column;
        }

        .placeholder {
            visibility: hidden;
        }
    `,
    renderCallback({inputs}) {
        const statusIcon: ViraIconSvg | undefined =
            inputs.status == undefined
                ? undefined
                : inputs.status.status
                  ? StatusSuccess24Icon
                  : StatusFailure24Icon;

        const shouldShowStatusPlaceholder = !!inputs.show.statusSpace && !statusIcon;

        const statusTemplate =
            statusIcon || shouldShowStatusPlaceholder
                ? html`
                      <${ViraIcon.assign({
                          icon: shouldShowStatusPlaceholder ? StatusFailure24Icon : statusIcon,
                          fitContainer: true,
                      })}
                          class="status-icon ${classMap({
                              success: !!inputs.status?.status,
                              placeholder: shouldShowStatusPlaceholder,
                          })}"
                          title=${inputs.status?.description}
                      ></${ViraIcon}>
                  `
                : nothing;
        const avatarTemplate = html`
            <div class="avatar">
                <${ViraImage.assign({
                    imageUrl: inputs.user.avatarUrl,
                })}
                    title=${inputs.user.username}
                ></${ViraImage}>
                ${statusTemplate}
            </div>
        `;

        const usernameTemplate = inputs.user.username;

        return html`
            <a href=${inputs.user.profileUrl}>
                ${inputs.show.avatar ? avatarTemplate : nothing}
                ${inputs.show.username ? usernameTemplate : nothing}
            </a>
        `;
    },
});
