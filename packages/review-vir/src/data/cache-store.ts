import {mapObjectValues} from '@augment-vir/common';
import {gitDataShape, type GitData} from '@review-vir/adapter-core';
import localForage from 'localforage-esm';
import {assertValidShape, isValidShape} from 'object-shape-tester';
import {AllServiceGitData, GitServiceName} from './all-adapters.js';

const reviewVirCacheStore = localForage.createInstance({
    description: 'Data cache review-vir.',
    name: 'review-vir-data-cache',
    storeName: 'review-vir-data-cache',
});

export async function savePullRequestDataCache(
    serviceName: GitServiceName,
    data: ReadonlyArray<Readonly<GitData>>,
) {
    data.forEach((dataEntry) => {
        assertValidShape(dataEntry, gitDataShape);
    });

    await reviewVirCacheStore.setItem(serviceName, data);
}

export async function getAllPullRequestDataCache(): Promise<AllServiceGitData> {
    return await mapObjectValues(GitServiceName, async (serviceName) => {
        return getPullRequestDataCache(serviceName);
    });
}

export async function getPullRequestDataCache(serviceName: string): Promise<GitData[]> {
    const cacheArray = await reviewVirCacheStore.getItem(serviceName);

    const validCaches = Array.isArray(cacheArray)
        ? cacheArray.filter((cacheEntry) => {
              if (isValidShape(cacheEntry, gitDataShape)) {
                  return true;
              } else {
                  console.warn('Ignored cache entry', cacheEntry);
                  return false;
              }
          })
        : [];

    return validCaches;
}
