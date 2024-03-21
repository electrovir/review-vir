import {TypedListenTarget} from 'typed-event-target';
import {AuthToken} from '../../../data/auth-tokens';
import {GitClientEvents} from './git-client-events';

export type GitClient = {
    init(authTokens: ReadonlyArray<Readonly<AuthToken>>): AutoUpdatingGitClient;
};

export class AutoUpdatingGitClient extends TypedListenTarget<GitClientEvents> {}
