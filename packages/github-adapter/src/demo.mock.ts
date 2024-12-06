/** Run this mock through `npm start` in this package. */

import type {AnyObject} from '@augment-vir/common';
import {waitForAnimationFrame} from '@augment-vir/web';
import {assertValidAuthToken, type AuthToken} from '@review-vir/adapter-core';
import {fetchGithubPullRequests} from './github-query/fetch-github.js';

const authToken: Readonly<AuthToken> = (globalThis as AnyObject).VITE_INJECTED_GITHUB_TOKEN[0];

assertValidAuthToken(authToken, 'github');

document.body.innerHTML = /* HTML */ `
    Loading...
`;
await waitForAnimationFrame();
const results = await fetchGithubPullRequests(authToken);
console.info(results);

document.body.innerHTML = /* HTML */ `
    Loading done. See console.
`;
