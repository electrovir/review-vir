import {
    PullRequestReviewStatus,
    type GitUser,
    type PullRequestReview,
} from '@review-vir/adapter-core';
import {classMap, css, defineElement, html, ifDefined, nothing, unsafeCSS} from 'element-vir';
import {
    StatusFailure24Icon,
    StatusSuccess24Icon,
    ViraIcon,
    viraIconCssVars,
    ViraIconSvg,
    ViraImage,
} from 'vira';
import {sharedColors} from '../../../styles/color.js';
import {avatarSize} from '../../../styles/size.js';

export const VirUser = defineElement<{
    user: Readonly<GitUser | PullRequestReview>;
    show: Readonly<{
        avatar: boolean;
        username: boolean;
        statusSpace?: boolean | undefined;
    }>;
}>()({
    tagName: 'vir-user',
    styles: css`
        :host {
            ${viraIconCssVars['vira-icon-fill-color'].name}: white;
        }

        a {
            display: flex;
            align-items: center;
            gap: 0.3em;
        }

        ${ViraImage} {
            max-height: ${avatarSize}px;
            max-width: ${avatarSize}px;
            min-height: ${avatarSize}px;
            min-width: ${avatarSize}px;
            box-sizing: border-box;
            border-radius: 50%;
            background-color: white;
            border: 2px solid #eee;
        }

        ${ViraIcon} {
            color: ${unsafeCSS(sharedColors.error)};
        }

        ${ViraIcon}.success {
            color: ${unsafeCSS(sharedColors.success)};
        }

        .avatar {
            display: flex;
            flex-direction: column;
        }

        .is-primary ${ViraImage} {
            border-color: ${unsafeCSS(sharedColors.primary)};
        }
        .is-code-owner ${ViraImage} {
            border-color: ${unsafeCSS(sharedColors.codeOwner)};
        }

        .placeholder {
            visibility: hidden;
        }
    `,
    render({inputs}) {
        const review: PullRequestReview | undefined =
            'user' in inputs.user ? inputs.user : undefined;
        const user = 'user' in inputs.user ? inputs.user.user : inputs.user;

        const statusIcon: ViraIconSvg | undefined =
            review == undefined || review.reviewStatus === PullRequestReviewStatus.Pending
                ? undefined
                : review.reviewStatus === PullRequestReviewStatus.Accepted
                  ? StatusSuccess24Icon
                  : StatusFailure24Icon;

        const shouldShowStatusPlaceholder = !!inputs.show.statusSpace && !statusIcon;

        const description: string | undefined =
            review == undefined || review.reviewStatus === PullRequestReviewStatus.Pending
                ? undefined
                : review.reviewStatus === PullRequestReviewStatus.Accepted
                  ? `${user.username} has accepted this pull request.`
                  : `${user.username} has requested changes on this pull request.`;

        const statusTemplate =
            statusIcon || shouldShowStatusPlaceholder
                ? html`
                      <${ViraIcon.assign({
                          icon: shouldShowStatusPlaceholder ? StatusFailure24Icon : statusIcon,
                          fitContainer: true,
                      })}
                          class="status-icon ${classMap({
                              success: review?.reviewStatus === PullRequestReviewStatus.Accepted,
                              placeholder: shouldShowStatusPlaceholder,
                          })}"
                          title=${ifDefined(description)}
                      ></${ViraIcon}>
                  `
                : nothing;
        const avatarTemplate = html`
            <div class="avatar">
                <${ViraImage.assign({
                    imageUrl: user.avatarUrl,
                })}
                    title=${user.username}
                ></${ViraImage}>
                ${statusTemplate}
            </div>
        `;

        const usernameTemplate = user.username;

        return html`
            <a
                href=${user.profileUrl}
                class=${classMap({'is-primary': !!review?.isPrimaryReviewer})}
            >
                ${inputs.show.avatar ? avatarTemplate : nothing}
                ${inputs.show.username ? usernameTemplate : nothing}
            </a>
        `;
    },
});
