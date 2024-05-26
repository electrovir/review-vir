import {itCases} from '@augment-vir/browser-testing';
import {parsePrimaryReviewers} from './parse-primary-reviewers';

describe(parsePrimaryReviewers.name, () => {
    itCases(parsePrimaryReviewers, [
        {
            it: 'handles "reviewer"',
            input: {bodyText: 'primary reviewer @my-name'},
            expect: ['my-name'],
        },
        {
            it: 'handles "reviewers"',
            input: {bodyText: 'primary reviewers @my-name'},
            expect: ['my-name'],
        },
        {
            it: 'handles an actual pull request body',
            input: {
                bodyText:
                    'https://my-ticket-url.com/ticket-number\nPrimary reviewer:\n@my-name1\n@my-name2\nChanges\n\nadd primary reviewer support\n\nHow to test\nNothing to test.',
            },
            expect: [
                'my-name1',
                'my-name2',
            ],
        },
        {
            it: 'handles no reviewers',
            input: {
                bodyText:
                    'https://my-ticket-url.com/ticket-number\nPrimary rev name1\n@my-name2\nChanges\n\nadd primary reviewer support\n\nHow to test\nNothing to test.',
            },
            expect: [],
        },
        {
            it: 'handles markdown formatting',
            input: {
                bodyText:
                    'https://my-ticket-url.com/ticket-number\n**Primary reviewer**: @name1\n@my-name2\nChanges\n\nadd primary reviewer support\n\nHow to test\nNothing to test.',
            },
            expect: [
                'name1',
                'my-name2',
            ],
        },
    ]);
});
