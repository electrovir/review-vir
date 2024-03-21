import {readJson} from '@augment-vir/node-js';
import {join, resolve} from 'path';
import {defineConfig} from 'virmator/dist/compiled-base-configs/base-vite';

const monoRepoDirPath = resolve(__dirname, '..', '..', '..');

export default defineConfig(
    {
        forGitHubPages: true,
        packageDirPath: resolve(__dirname, '..'),
    },
    async (baseConfig, basePaths) => {
        const secretsPath = join(monoRepoDirPath, '.not-committed', 'secrets.json');

        const secretsJson: Readonly<Record<string, string>> | undefined =
            process.env.NODE_ENV === 'development'
                ? await readJson(secretsPath, {
                      throwErrors: false,
                  })
                : undefined;

        return {
            ...baseConfig,
            define: {
                VITE_INJECTED_SECRETS_FILE: JSON.stringify(secretsJson || {}),
                VITE_INJECTED_ENCRYPTION_KEY: JSON.stringify(
                    process.env.REVIEW_VIR_ENCRYPTION_KEY || secretsJson?.encryptionKey || '',
                ),
            },
            build: {
                outDir: join(basePaths.cwd, 'dist-pages'),
            },
        };
    },
);
