import {TypedListenTarget} from 'typed-event-target';
import {AuthToken} from '../../../data/auth-tokens.js';
import {GitClientEvents} from './git-client-events.js';

export type GitClient = {
    init(authTokens: ReadonlyArray<Readonly<AuthToken>>): AutoUpdatingGitClient;
};

export class AutoUpdatingGitClient extends TypedListenTarget<GitClientEvents> {}
