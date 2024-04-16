import {isEnumValue} from '@augment-vir/common';
import {FullRoute, SpaRouter} from 'spa-router-vir';

export enum ReviewVirMainPath {
    Auth = 'auth',
    PullRequests = 'pull-requests',
}

export type ValidReviewVirPaths = [ReviewVirMainPath.Auth] | [ReviewVirMainPath.PullRequests];

export type ReviewVirFullRoute = Required<
    Readonly<FullRoute<ValidReviewVirPaths, undefined, undefined>>
>;

export const defaultReviewVirFullRoute: Readonly<ReviewVirFullRoute> = {
    hash: undefined,
    paths: [ReviewVirMainPath.PullRequests],
    search: undefined,
} as const;

export function createReviewVirRouter() {
    return new SpaRouter<ValidReviewVirPaths, undefined, undefined>({
        basePath: 'review-vir',
        sanitizeRoute(rawRoute) {
            const sanitizedPaths = sanitizePaths(rawRoute.paths);

            return {
                paths: sanitizedPaths,
                hash: undefined,
                search: undefined,
            };
        },
    });
}

export type ReviewVirRouter = ReturnType<typeof createReviewVirRouter>;

function sanitizePaths(rawPaths: ReadonlyArray<string>): ValidReviewVirPaths {
    const mainPath = rawPaths[0];
    if (!isEnumValue(mainPath, ReviewVirMainPath)) {
        return defaultReviewVirFullRoute.paths;
    } else {
        return [mainPath];
    }
}
