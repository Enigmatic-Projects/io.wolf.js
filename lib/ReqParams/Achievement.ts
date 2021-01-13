export interface IAchievementList {
    body: {
        /**
         * (Optional) Id list of the achievements to retrieve
         */
        idList?: number[],

        /**
         * (Optinal) the language to get the result localized to
         */
        languageId?: number
    }
}

export interface IAchievementSubscriberList {
    body: {
        /**
         * (Required) The ID of the subscriber making the request.
         */
        subscriberId: number,
        /**
         * (Optional) Id for the achievement to get the unlocked children for
         */
        parentId?: number,
        /**
         * (Optional default weight) Criteria to order the result
         */
        order?: string
    }
}