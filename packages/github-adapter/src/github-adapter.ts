import {defineGitAdapter, type GitUser} from '@review-vir/adapter-core';
import {fetchGithubPullRequests} from './github-query/fetch-github.js';
import {parseGithubPullRequest, parseGithubUser} from './parse-github-data.js';

const serviceName = 'GitHub';

export const GithubAdapter = defineGitAdapter({
    serviceName,
    async fetchGitData(authToken) {
        const githubData = await fetchGithubPullRequests(authToken);

        const user: Readonly<GitUser> = parseGithubUser(githubData.viewer);

        const pullRequests = githubData.search.nodes.map((rawPullRequest) =>
            parseGithubPullRequest(authToken.authTokenName, rawPullRequest, user, serviceName),
        );

        return {
            data: [
                {
                    pullRequests,
                    user,
                },
            ],
            queryCost: githubData.rateLimit.cost,
        };
    },
});
