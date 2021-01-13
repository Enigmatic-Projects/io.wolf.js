export interface IGroupDiscoveryList {
    body: {
        /**
         * The language id, defaults to everything if not provided
         */
        language?: number;

        /**
         * default: 0
         */
        offset?: number;

        /**
         * The maximum number of results to return
         */
        maxResults?: number;

        /**
         * The recipe id to return associated groups for
         */
        recipeId: number;
    }
}