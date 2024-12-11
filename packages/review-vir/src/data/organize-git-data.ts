import {organizePullRequests, type PullRequestsByOwner} from '@review-vir/adapter-core';
import {type AllServiceGitData} from './all-adapters.js';

export function organizeGitData(allData: AllServiceGitData): PullRequestsByOwner {
    const allPullRequests = Object.values(allData)
        .flat()
        .flatMap((entry) => entry.pullRequests);

    return organizePullRequests(allPullRequests);
}
