import {type DeclarativeElementDefinition} from 'element-vir';
import {ReviewVirMainPath} from '../../../data/routing.js';
import {VirAnnualReview} from '../main-pages/annual-review/vir-annual-review.element.js';
import {VirSettings} from '../main-pages/settings/vir-settings.element.js';

export const routeElements = {
    /**
     * The CodeReview element is not routed because attaching and detaching it is really slow due to
     * how much data it contains.
     */
    [ReviewVirMainPath.CodeReview]: undefined,
    [ReviewVirMainPath.Settings]: VirSettings,
    [ReviewVirMainPath.AnnualReview]: VirAnnualReview,
} satisfies Readonly<Record<ReviewVirMainPath, DeclarativeElementDefinition | undefined>>;
