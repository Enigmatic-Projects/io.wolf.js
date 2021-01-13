export interface IStageList {
    body: {
        /**
         * (Optional) Language Id to localise the stage name
         */
        languageId?: number;
    }
}

export interface IStageGroupActiveList {
    body: {
        /**
         * (Required) Group Id to retrieve the available Stages for
         */
        id: number;
    }
}