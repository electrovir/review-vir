import {getObjectTypedKeys} from '@augment-vir/common';
import {assertValidShape, defineShape, enumShape, indexedKeys} from 'object-shape-tester';

export enum SupportedServiceName {
    Github = 'github',
}

export const authTokenShape = defineShape(
    {
        authTokenName: '',
        authTokenSecret: '',
    },
    true,
);
export type AuthToken = typeof authTokenShape.runtimeType;

export const authTokensByServiceShape = defineShape(
    indexedKeys({
        keys: enumShape(SupportedServiceName),
        values: [authTokenShape],
        required: false,
    }),
    true,
);
export type AuthTokensByService = typeof authTokensByServiceShape.runtimeType;

export class AuthTokenValidationError extends Error {
    public override name = 'AuthTokenValidationError';

    constructor(
        message: string,
        public readonly serviceName: SupportedServiceName,
        public readonly authTokenIndex: number,
    ) {
        super(`${message} at index '${authTokenIndex}' in service '${serviceName}'`);
    }
}

export function assertValidAuthTokensByService(
    input: unknown,
): asserts input is AuthTokensByService {
    assertValidShape(input, authTokensByServiceShape);

    getObjectTypedKeys(input).forEach((serviceName) => {
        const authTokens = input[serviceName];
        authTokens?.forEach((authToken, authTokenIndex) => {
            if (!authToken.authTokenName) {
                throw new AuthTokenValidationError(
                    'Empty auth token name',
                    serviceName,
                    authTokenIndex,
                );
            } else if (!authToken.authTokenSecret) {
                throw new AuthTokenValidationError(
                    'Empty auth token secret',
                    serviceName,
                    authTokenIndex,
                );
            }
        });
    });
}

export type EncryptedAuthToken = {
    data: Uint8Array;
    publicInitVector: Uint8Array;
};
