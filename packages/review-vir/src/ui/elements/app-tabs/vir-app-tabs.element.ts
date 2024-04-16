import {css, defineElement, html, listen} from 'element-vir';
import {noNativeSpacing} from 'vira';
import {
    ReviewVirFullRoute,
    ReviewVirMainPath,
    ReviewVirRouter,
    ValidReviewVirPaths,
} from '../../../data/routing/vir-route';

export const VirAppTabs = defineElement<{
    router: Readonly<ReviewVirRouter>;
    currentRoute: Readonly<ReviewVirFullRoute>;
}>()({
    tagName: 'vir-app-tabs',
    styles: css`
        :host {
            display: flex;
            border-bottom: 1px solid #ddd;
        }

        ol,
        li {
            ${noNativeSpacing};
            list-style: none;
        }

        ol {
            padding: 4px 10px;
            display: flex;
        }

        a {
            display: flex;
            color: inherit;
            text-decoration: none;
            border-radius: 4px;
            padding: 4px 16px;
            margin-left: -8px;
        }

        a:hover {
            background-color: #ddd;
        }
    `,
    renderCallback({inputs}) {
        const tabTemplates = appTabs.map((appTab) => {
            const route: Readonly<ReviewVirFullRoute> = {
                paths: appTab.paths,
                hash: undefined,
                search: undefined,
            };

            return html`
                <li>
                    <a
                        href=${inputs.router.createRouteUrl(route)}
                        ${listen('click', (event) => {
                            inputs.router.setRouteOnDirectNavigation(route, event);
                        })}
                    >
                        ${appTab.label}
                    </a>
                </li>
            `;
        });

        return html`
            <ol>
                ${tabTemplates}
            </ol>
        `;
    },
});

const appTabs: ReadonlyArray<Readonly<{paths: ValidReviewVirPaths; label: string}>> = [
    {
        paths: [ReviewVirMainPath.PullRequests],
        label: 'Pull Requests',
    },
    {
        paths: [ReviewVirMainPath.Auth],
        label: 'Auth',
    },
];
