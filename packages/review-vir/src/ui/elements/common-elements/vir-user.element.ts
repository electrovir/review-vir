import {classMap, css, defineElement, html, ifDefined, nothing} from 'element-vir';
import {StatusFailure24Icon, StatusSuccess24Icon, ViraIcon, ViraIconSvg, ViraImage} from 'vira';
import {PullRequestReview, PullRequestReviewStatus} from '../../../data/git/pull-request';
import {User} from '../../../data/git/user';

export const VirUser = defineElement<{
    user: Readonly<User>;
    show: Readonly<{
        avatar: boolean;
        username: boolean;
        statusSpace?: boolean | undefined;
    }>;
    review?: Readonly<Omit<PullRequestReview, 'user'>> | undefined;
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
            border-radius: 50%;
            background-color: white;
            border: 2px solid #eee;
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

        .is-primary ${ViraImage} {
            border-color: red;
        }

        .placeholder {
            visibility: hidden;
        }
    `,
    renderCallback({inputs}) {
        const statusIcon: ViraIconSvg | undefined =
            inputs.review == undefined ||
            inputs.review.reviewStatus === PullRequestReviewStatus.Pending
                ? undefined
                : inputs.review.reviewStatus === PullRequestReviewStatus.Accepted
                  ? StatusSuccess24Icon
                  : StatusFailure24Icon;

        const shouldShowStatusPlaceholder = !!inputs.show.statusSpace && !statusIcon;

        const description: string | undefined =
            inputs.review == undefined ||
            inputs.review.reviewStatus === PullRequestReviewStatus.Pending
                ? undefined
                : inputs.review.reviewStatus === PullRequestReviewStatus.Accepted
                  ? `${inputs.user.username} has accepted this pull request.`
                  : `${inputs.user.username} has requested changes on this pull request.`;

        const statusTemplate =
            statusIcon || shouldShowStatusPlaceholder
                ? html`
                      <${ViraIcon.assign({
                          icon: shouldShowStatusPlaceholder ? StatusFailure24Icon : statusIcon,
                          fitContainer: true,
                      })}
                          class="status-icon ${classMap({
                              success:
                                  inputs.review?.reviewStatus === PullRequestReviewStatus.Accepted,
                              placeholder: shouldShowStatusPlaceholder,
                          })}"
                          title=${ifDefined(description)}
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
            <a
                href=${inputs.user.profileUrl}
                class=${classMap({'is-primary': !!inputs.review?.isPrimaryReviewer})}
            >
                ${inputs.show.avatar ? avatarTemplate : nothing}
                ${inputs.show.username ? usernameTemplate : nothing}
            </a>
        `;
    },
});
