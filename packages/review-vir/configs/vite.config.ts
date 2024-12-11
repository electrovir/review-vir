import {AnyObject} from '@augment-vir/common';
import {readJsonFile} from '@augment-vir/node';
import {defineConfig} from '@virmator/frontend/configs/vite.config.base.ts';
import {join, resolve} from 'node:path';

const monoRepoDirPath = resolve(import.meta.dirname, '..', '..', '..');
const mockResponsePath = join(monoRepoDirPath, '.not-committed', 'mock-response.json');

export default defineConfig(
    {
        forGitHubPages: true,
        packageDirPath: resolve(import.meta.dirname, '..'),
    },
    async (baseConfig, basePaths) => {
        const secretsPath = join(monoRepoDirPath, '.not-committed', 'secrets.json');

        const secretsJson: Record<string, string> | undefined =
            process.env.NODE_ENV === 'development'
                ? ((await readJsonFile(secretsPath)) as Record<string, string> | undefined)
                : undefined;
        const mockResponseJson: AnyObject | undefined =
            process.env.NODE_ENV === 'development'
                ? ((await readJsonFile(mockResponsePath)) as AnyObject | undefined)
                : undefined;

        return {
            ...baseConfig,
            define: {
                ...baseConfig.define,
                VITE_INJECTED_SECRETS_FILE: JSON.stringify(secretsJson || {}),
                VITE_INJECTED_ENCRYPTION_KEY: JSON.stringify(
                    process.env.REVIEW_VIR_ENCRYPTION_KEY || secretsJson?.encryptionKey || '',
                ),
                VITE_INJECTED_MOCK_RESPONSE: JSON.stringify(mockResponseJson),
            },
            build: {
                ...baseConfig.build,
                outDir: join(basePaths.cwd, 'dist-pages'),
            },
        };
    },
);
