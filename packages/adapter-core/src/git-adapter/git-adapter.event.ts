import {Values} from '@augment-vir/common';
import {RequireExactlyOne} from 'type-fest';
import {defineTypedCustomEvent, defineTypedEvent} from 'typed-event-target';
import {GitData} from '../git/git-data.js';

export enum GitUpdatesStoppedReason {
    HighFailureRate = 'high-failure-rate',
    ExcessiveCost = 'excessive-cost',
}

export class GitUpdateDoneEvent extends defineTypedCustomEvent<
    RequireExactlyOne<{
        error: Error;
        data: GitData[];
    }>
>()('git-update-done') {}
export class GitUpdateStartEvent extends defineTypedEvent('git-update-start') {}
export class GitUpdateSkippedEvent extends defineTypedEvent('git-update-skipped') {}
export class GitUpdatesStoppedEvent extends defineTypedCustomEvent<{
    reason: GitUpdatesStoppedReason;
    message: string;
}>()('git-updates-stopped') {}

export const gitAdapterEvents = {
    GitUpdateDoneEvent,
    GitUpdateSkippedEvent,
    GitUpdatesStoppedEvent,
    GitUpdateStartEvent,
};
export type GitAdapterEvents = InstanceType<Values<typeof gitAdapterEvents>>;
