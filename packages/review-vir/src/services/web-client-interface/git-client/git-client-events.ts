import {defineTypedCustomEvent} from 'typed-event-target';
import {GitData} from '../../../data/git/git-data.js';

export class GitDataResolveEvent extends defineTypedCustomEvent<GitData>()(
    'pull-requests-resolved',
) {}

export class ErrorEvent extends defineTypedCustomEvent<Error>()('custom-error') {}

export class GitUpdateStartEvent extends defineTypedCustomEvent<Promise<GitData>>()(
    'pull-requests-update-started',
) {}

/** Used only when the list of pull requests changes. */
export class GitDataChangeEvent extends defineTypedCustomEvent<GitData>()('pull-requests-change') {}

export type GitClientEvents =
    | ErrorEvent
    | GitDataChangeEvent
    | GitDataResolveEvent
    | GitUpdateStartEvent;
