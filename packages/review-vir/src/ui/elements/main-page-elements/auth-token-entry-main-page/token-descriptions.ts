import {HTMLTemplateResult, html} from 'element-vir';
import {SupportedServiceName} from '../../../../../../adapter-core/src/auth-store/auth-tokens.js';

export type Permission = {label: string; value: string};

export const tokenDescriptions: Record<
    SupportedServiceName,
    {intro: HTMLTemplateResult; permissions: Permission[]}
> = {
    [SupportedServiceName.Github]: {
        intro: html`
            You will need a
            <a href="https://github.com/settings/tokens?type=beta">
                Fine-grained Personal Access Token
            </a>
            with the following permissions:
        `,
        permissions: [
            {label: 'Commit statuses', value: 'Read-only'},
            {label: 'Contents', value: 'Read-only'},
            {label: 'Metadata', value: 'Read-only'},
            {label: 'Pull requests', value: 'Read-only'},
        ],
    },
};
