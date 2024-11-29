export default {
    "createChainedPullRequests > maintains sort with identical pull requests 1": [
        "1",
        "2",
        "3"
    ],
    "createChainedPullRequests > sorts drafts to the bottom 1": [
        "1",
        "2",
        "3"
    ],
    "createChainedPullRequests > sorts needs review to the top 1": [
        "1",
        "2",
        "3"
    ],
    "createChainedPullRequests > sorts oldest updates to the top 1": [
        "1",
        "2",
        "3"
    ],
    "createChainedPullRequests > sorts primary review to top 1": [
        "1",
        "2",
        "3"
    ],
    "organizePullRequests > organizes pull requests 1": {
        "user name": {
            "owner": "user name",
            "chainedPullRequests": {
                "assigned": [
                    {
                        "pullRequest": "assigned",
                        "isChained": false,
                        "children": []
                    }
                ],
                "reviewer": [
                    {
                        "pullRequest": "pending user review",
                        "isChained": false,
                        "children": []
                    },
                    {
                        "pullRequest": "not chained",
                        "isChained": false,
                        "children": []
                    },
                    {
                        "pullRequest": "head of chain 1",
                        "isChained": false,
                        "children": [
                            {
                                "pullRequest": "chain 1 child 1",
                                "isChained": true,
                                "children": []
                            }
                        ]
                    }
                ]
            }
        }
    }
};