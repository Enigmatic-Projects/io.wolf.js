export interface IGroupMemberList {

    headers: {
        /**
         * Version of the command. Currently used for different output structure. Defaults to 1 for backward compatibility; Versions 1 & 2 are deprecated. Version 3 returns a batch response body that is keyed using the group id.
         */
        version?: number;
    }

    body: {
        /**
         * (Required) Single Group ID to retrieve
         */
        id: number;

        /**
         * Flag denoting whether or not to subscribe to Group Member List updates, and Subscriber Profile & Presence updates for the subscribers in the group. Defaults to TRUE.
         */
        subscribe?: boolean
    }
}

export interface IGroupMemberAdd {
    body: {
        /**
         * (semi-optional) Group ID.
         */
        groupId?: number;

        /**
         * (semi-optional) Group Name
         */
        name?: string;

        /**
         * (optional) Password for the group, if required
         */
        password?: string;

        /**
         * (optional) The referrer’s subscriber ID
         */
        referredBy?: string;
    }
}

export interface IGroupMemberUpdate {
    body: {
        /**
         * Group ID
         */
        groupId: number;

        /**
         * Subscriber ID of the group member to update
         */
        subscriberId: number;

        /**
         * The new desired capabilities of the group member. Allowed values: 0 (reset), 1 (admin), 2 (mod), 4 (ban), 8 (silence)
         */
        capabilities: 0 | 1 | 2 | 4 | 8;
    }
}

export interface IGroupMemberDelete {
    body: {
        /**
         * Group ID
         */
        groupId: number;

        /**
         * Subscriber ID to remove from group. If not provided, it will remove the requester
         */
        subscriberId?: number;
    }
}