import {assert} from '@augment-vir/assert';
import {ArrayElement} from '@augment-vir/common';
import {
    GithubGraphqlCheckRunConclusion,
    failedCheckRunConclusions,
    pendingCheckRunConclusions,
    successCheckRunConclusions,
} from './github-graphql-pull-request-query.js';

describe('GithubGraphqlCheckRunConclusion', () => {
    it('is covered by all state arrays', () => {
        type AllTypes =
            | ArrayElement<typeof failedCheckRunConclusions>
            | ArrayElement<typeof successCheckRunConclusions>
            | ArrayElement<typeof pendingCheckRunConclusions>;
        type AllTypesString = `${AllTypes}`;
        type AllEnumValuesString = `${GithubGraphqlCheckRunConclusion}`;

        assert.tsType<AllTypesString>().equals<AllEnumValuesString>();

        // used for making it clear what is missing
        const testAssignment: Record<AllEnumValuesString, unknown> = {} as any as Record<
            AllTypesString,
            unknown
        >;
    });
});
