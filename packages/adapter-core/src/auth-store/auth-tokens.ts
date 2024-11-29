import {assertValidShape, defineShape} from 'object-shape-tester';

export const authTokenShape = defineShape(
    {
        authTokenName: '',
        authTokenSecret: '',
    },
    true,
);
export type AuthToken = typeof authTokenShape.runtimeType;

export class AuthTokenValidationError extends Error {
    public override name = 'AuthTokenValidationError';

    constructor(
        message: string,
        public readonly serviceName: string,
    ) {
        super(`${message} in service '${serviceName}'`);
    }
}

export function assertValidAuthToken(
    input: unknown,
    serviceName: string,
): asserts input is AuthToken {
    assertValidShape(input, authTokenShape);
    if (!input.authTokenName) {
        throw new AuthTokenValidationError('Empty auth token name', serviceName);
    } else if (!input.authTokenSecret) {
        throw new AuthTokenValidationError('Empty auth token secret', serviceName);
    }
}

export type EncryptedAuthToken = {
    data: Uint8Array;
    publicInitVector: Uint8Array;
};
