import {extractErrorMessage, isTruthy, mapObjectValues} from '@augment-vir/common';
import {classMap, css, defineElement, html, isError, renderIf, unsafeCSS} from 'element-vir';
import {
    StatusFailure24Icon,
    StatusInProgress24Icon,
    StatusSuccess24Icon,
    ViraIcon,
    ViraIconSvg,
} from 'vira';
import {PullRequest, PullRequestMergeStatus} from '../../../../../data/git/pull-request';
import {User} from '../../../../../data/git/user';
import {calculateTextColor} from '../../../../../util/color';
import {VirUsers} from '../../../common-elements/vir-users.element';

export const VirPullRequest = defineElement<{
    user: Readonly<User>;
    pullRequest: Readonly<PullRequest>;
    nested: boolean;
}>()({
    tagName: 'vir-pull-request',
    styles: css`
        :host {
            display: flex;
            overflow: hidden;
        }

        a {
            color: inherit;
        }
        a:hover {
            color: blue;
        }

        .rows {
            display: flex;
            flex-direction: column;
            gap: 4px;
            overflow: hidden;
        }

        .columns {
            display: flex;
            flex-direction: row;
            gap: 4px;
            overflow: hidden;
        }

        .big-gap {
            gap: 16px;
        }

        .center {
            align-items: center;
        }

        .grow {
            flex-grow: 1;
        }

        .pull-request {
            border-radius: 8px;
            border: 2px solid #ccc;
            padding: 8px;
        }

        .pull-request.needs-review {
            border-color: dodgerblue;
        }

        .pull-request.is-draft {
            border-color: #f5f5f5;
        }

        .pull-request-title-line {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .branch-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .subtitle {
            font-size: 0.9em;
        }

        .faint {
            color: #999;
        }

        .error {
            color: orange;
        }
        .fail {
            color: red;
        }
        .inProgress {
            color: dodgerblue;
        }
        .success {
            color: green;
        }

        .deletions {
            color: #bf4040;
        }
        .changed-files {
            color: #5690c7;
        }
        .additions {
            color: #206020;
        }

        .checks {
            display: flex;
            gap: 4px;
        }

        .label {
            opacity: 0.5;
            padding: 1px 8px;
            border-radius: 16px;
            color: black;
        }

        .no-shrink {
            flex-shrink: 0;
        }

        .nested-arrow {
            flex-shrink: 0;
            color: #ccc;
            height: 40px;
            width: 40px;
            font-size: 2em;
            font-weight: bold;
            transform: rotate(-90deg);
        }

        .select-all {
            user-select: all;
            -webkit-user-select: all;
        }
    `,
    renderCallback({inputs}) {
        const assignees = Object.values(inputs.pullRequest.users.assignees).filter(isTruthy);

        const checksIconKey: keyof typeof checkIcons =
            inputs.pullRequest.status.checksStatus instanceof Error ||
            inputs.pullRequest.status.hasMergeConflicts
                ? 'error'
                : inputs.pullRequest.status.checksStatus.failCount
                  ? 'fail'
                  : inputs.pullRequest.status.checksStatus.inProgressCount
                    ? 'inProgress'
                    : 'success';

        const checksTitle = inputs.pullRequest.status.hasMergeConflicts
            ? 'Has Merge Conflicts'
            : inputs.pullRequest.status.checksStatus instanceof Error
              ? [
                    'Error',
                    extractErrorMessage(inputs.pullRequest.status.checksStatus),
                ].join(': ')
              : inputs.pullRequest.status.checksStatus.failCount
                ? [
                      inputs.pullRequest.status.checksStatus.failCount,
                      'checks failed.',
                  ].join(' ')
                : inputs.pullRequest.status.checksStatus.inProgressCount
                  ? [
                        inputs.pullRequest.status.checksStatus.inProgressCount,
                        'check in progress.',
                    ].join(' ')
                  : 'All checks passed.';

        const baseBranchName: string | undefined = isError(
            inputs.pullRequest.branches.headBranch.branchName,
        )
            ? undefined
            : inputs.pullRequest.branches.headBranch.branchName;

        const headBranchName: string | undefined = isError(
            inputs.pullRequest.branches.targetBranch.branchName,
        )
            ? undefined
            : inputs.pullRequest.branches.targetBranch.branchName;

        /** Note that only a max of 100 comments can be counted at once. */
        const resolvedCommentsString = [
            inputs.pullRequest.status.comments.resolved,
            inputs.pullRequest.status.comments.total,
        ].join(' / ');

        const labelTemplates = inputs.pullRequest.status.labels.map((label) => {
            const style = css`
                background-color: ${unsafeCSS(label.color)};
                color: ${unsafeCSS(calculateTextColor(label.color))};
            `;
            return html`
                <span class="label" style=${style}>${label.name}</span>
            `;
        });

        return html`
            ${renderIf(
                inputs.nested,
                html`
                    <div class="nested-arrow">↱</div>
                `,
            )}
            <div
                class="pull-request rows grow ${classMap({
                    'needs-review': inputs.pullRequest.status.needsReviewFromCurrentUser,
                    'is-draft':
                        inputs.pullRequest.status.mergeStatus === PullRequestMergeStatus.Draft,
                })}"
            >
                <div class="columns title">
                    <div class="rows grow">
                        <div class="columns center">
                            <span class="faint no-shrink">
                                <a href=${inputs.pullRequest.branches.headBranch.repo.htmlUrl}>
                                    ${inputs.pullRequest.branches.headBranch.repo.repoName}
                                </a>
                            </span>
                            <div class="checks">
                                <${ViraIcon.assign({
                                    icon: checkIcons[checksIconKey],
                                })}
                                    class=${checksIconKey}
                                    title=${checksTitle}
                                ></${ViraIcon}>
                                <${VirUsers.assign({
                                    users: assignees,
                                    overlap: true,
                                })}></${VirUsers}>
                            </div>
                            ${renderIf(
                                !!(baseBranchName || headBranchName),
                                html`
                                    <div class="center columns subtitle faint">
                                        <span
                                            class="branch-name select-all"
                                            title=${headBranchName}
                                        >
                                            ${headBranchName}
                                        </span>
                                        ←
                                        <span
                                            class="branch-name select-all"
                                            title=${baseBranchName}
                                        >
                                            ${baseBranchName}
                                        </span>
                                    </div>
                                `,
                            )}
                        </div>
                        <a href=${inputs.pullRequest.id.htmlUrl}>
                            <b>#${inputs.pullRequest.id.prNumber}:</b>
                            ${inputs.pullRequest.id.title}
                        </a>
                    </div>
                    <${VirUsers.assign({
                        ...calculateReviewers(inputs.pullRequest.users.reviewers),
                        overlap: false,
                        holdStatusSpace: true,
                    })}></${VirUsers}>
                </div>
                <div class="subtitle columns big-gap faint">
                    <div>
                        <span
                            class="additions"
                            title=${`${inputs.pullRequest.changes.additions} added lines`}
                        >
                            +${inputs.pullRequest.changes.additions}
                        </span>
                        <span
                            class="deletions"
                            title=${`${inputs.pullRequest.changes.deletions} deleted lines`}
                        >
                            -${inputs.pullRequest.changes.deletions}
                        </span>
                        <span
                            class="changed-files"
                            title=${`${inputs.pullRequest.changes.changedFiles} changed files`}
                        >
                            &nbsp;${inputs.pullRequest.changes.changedFiles}
                        </span>
                    </div>
                    <div>
                        <span title=${`${resolvedCommentsString} comments resolved`}>
                            ${resolvedCommentsString}
                        </span>
                    </div>
                    <div>
                        <span title=${`${inputs.pullRequest.status.commitCount} commits`}>
                            ${inputs.pullRequest.status.commitCount}
                        </span>
                    </div>
                    <div>${labelTemplates}</div>
                </div>
            </div>
        `;
    },
});

function calculateReviewers(
    reviewers: Readonly<PullRequest['users']['reviewers']>,
): Pick<(typeof VirUsers)['inputsType'], 'users' | 'statuses'> {
    const statuses: (typeof VirUsers)['inputsType']['statuses'] = mapObjectValues(
        reviewers,
        (key, value) => {
            return value?.reviewStatus;
        },
    );
    const users: Readonly<User>[] = Object.values(reviewers)
        .map((reviewer) => reviewer?.user)
        .filter(isTruthy);

    return {statuses, users};
}

const checkIcons = {
    error: StatusInProgress24Icon,
    fail: StatusFailure24Icon,
    inProgress: StatusInProgress24Icon,
    success: StatusSuccess24Icon,
} as const satisfies Readonly<Record<string, ViraIconSvg>>;
