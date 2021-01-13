export interface ISubscriberContactList {
    body: {
        /**
         * If true, Events for the Contact List, Contact Subscriber & Contact Subscriber Presence updates will be triggered.
         */
        subscribe?: boolean
    }
}

export interface ISubscriberContactAdd {
    body: {
        /**
         * (Required) Subscriber ID of the contact to add
         */
        id: number
    }
}

export interface ISubscriberContactDelete {
    body: {
        /**
         * (Required) Subscriber ID of the contact to delete
         */
        id: number
    }
}