import {css, defineElementNoInputs, html} from 'element-vir';

export const VirErrorMessage = defineElementNoInputs({
    tagName: 'vir-error-message',
    styles: css`
        :host {
            color: red;
            font-weight: bold;
        }
    `,
    renderCallback() {
        return html`
            <slot></slot>
        `;
    },
});
