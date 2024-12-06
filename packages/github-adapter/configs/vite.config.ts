import type {AnyObject} from '@augment-vir/common';
import {readJsonFile} from '@augment-vir/node';
import {defineConfig} from '@virmator/frontend/configs/vite.config.base.ts';
import {join, resolve} from 'node:path';

const monoRepoDirPath = resolve(import.meta.dirname, '..', '..', '..');
const secretsPath = join(monoRepoDirPath, '.not-committed', 'secrets.json');

export default defineConfig(
    {
        forGitHubPages: true,
        packageDirPath: resolve(import.meta.dirname, '..'),
    },
    async (baseConfig) => {
        const secretsJson: AnyObject | undefined =
            process.env.NODE_ENV === 'development'
                ? ((await readJsonFile(secretsPath)) as AnyObject | undefined)
                : undefined;

        return {
            ...baseConfig,
            define: {
                ...baseConfig.define,
                VITE_INJECTED_GITHUB_TOKEN: JSON.stringify(secretsJson?.authTokens?.github || []),
            },
        };
    },
);
