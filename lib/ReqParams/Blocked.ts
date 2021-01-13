export interface ISubscriberBlockList {
    body: {
        /**
         * If true, Events for the Blocked List, Blocked Subscriber & Blocked Subscriber Presence updates will be triggered.
         */
        subscribe?: boolean
    }
}

export interface ISubscriberBlockAdd {
    body: {
        /**
         * (Required) Subscriber ID of the contact to add
         */
        id: number
    }
}

export interface ISubscriberBlockDelete {
    body: {
        /**
         * (Required) Subscriber ID of the contact to delete
         */
        id: number
    }
}