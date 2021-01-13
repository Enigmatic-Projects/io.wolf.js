export interface ISearch {
    body: {
        /**
         * The types of search to perform
         */
        types: string[];

        /**
         * The search query
         */
        query: string;

        /**
         * The maximum number of results returned
         */
        maxResults: number;

        /**
         * The list offset
         */
        offset: number
    }
}