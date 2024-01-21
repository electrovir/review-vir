import {defineElementNoInputs, html} from 'element-vir';

export const VirApp = defineElementNoInputs({
    tagName: 'vir-app',
    renderCallback() {
        return html`
            Something will go here...
        `;
    },
});
