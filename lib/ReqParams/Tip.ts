export interface ITipAdd {
    body: {
        /**
         * Subscriber ID who you’d like to tip
         */
        subscriberId: number;

        /**
         * Group ID context
         */
        groupId: number;

        /**
         * List of charms to tip user
         */
        charmList: {
            /**
             * The id of the charm
             */
            id: number;

            /**
             * The quantity to tip
             */
            quantity: number;
        }[];

        /**
         * The context in which this tip is being given in
         */
        context: {
            /**
             * Type of context for the tip
             */
            type: string;

            /**
             * Additional data to identify the context. e.g. message must use a timestamp here
             */
            id: number
        }
    }
}

export interface ITipDetail {
    body: {
        /**
         * Group ID of the tip details you want
         */
        groupId: number;

        /**
         * Context type of the tip. Currently only ‘message’ is supported
         */
        contextType: string;

        /**
         * Context ID of the tip you’d like
         */
        id: number;

        /**
         * Offset of the pagination (optional)
         */
        offset?: number;

        /**
         * Limit of the amount of results returned (optional)
         */
        limit?: number;
    }
}

export interface ITipSummary {
    body: {
        /**
             * Group ID of the tip details you want
             */
        groupId: number;

        /**
         * Context type of the tip. Currently only ‘message’ is supported
         */
        contextType: string;

        /**
         * Context ID of the tip you’d like
         */
        id?: number;

        /**
         * Context IDs of the tips you’d like (batch request)
         */
        idList?: number[];
    }
}

export interface ITipLeaderboardGroup {
    body: {
        /**
         * Group ID you’d like the leaderboard for
         */
        groupId: number;

        /**
         * ‘subscriber’ or ‘charm’
         */
        type: 'subscriber' | 'charm';

        /**
         * One of 'hour’, 'day’, 'week’, ‘month’
         */
        period: 'hour' | 'day' | 'week' | 'month';

        /**
         * One of ‘sent’ or ‘received’ (N/A for ‘charm’ type)
         */
        tipDirection: 'sent' | 'received';
    }
}

export interface ITipLeaderboardGroupSummary {
    /**
     * Group ID you’d like the tip stats for
     */
    groupId: number;
}

export interface ITipLeaderboardGlobal {
    body: {
        /**
         * Only applicable if type is ‘group’
         */
        groupId?: number;

        /**
         * The type of global leaderboard to fetch (‘group’ or ‘subscriber’)
         */
        type: 'group' | 'subscriber';

        /**
         * One of 'hour’, 'day’, 'week’, ‘month’
         */
        period: 'hour' | 'day' | 'week' | 'month';

        /**
         * One of ‘sent’ or ‘received’ only applicable to ‘subscriber’ type
         */
        tipDirection: 'sent' | 'received';
    }
}

export interface ITipLeaderboardGlobalSummary {
    body: {
        /**
         * One of 'hour’, 'day’, 'week’, ‘month’
         */
        period: 'hour' | 'day' | 'week' | 'month';
    }
}