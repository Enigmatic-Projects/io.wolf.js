export interface IGroupAudio {
    body: {
        /**
         * Required. Single Group ID to retrieve the audio profile for.
         */
        id: number;

        /**
         * Optional. Flag denoting whether or not to subscribe to Audio Profile updates for the given group ID. Defaults to false.
         */
        subscribe?: boolean;
    }
}

export interface IGroupAudioUpdate {
    headers: {
        /**
         * Version of the command, defaults to 1. Version 2 requires advanced admin to be set to allow group admins to update.
         */
        version?: number;
    }
    body: {
        /**
         * The Group ID
         */
        id: number;

        /**
         * False by default, until configured otherwise
         */
        enabled?: boolean;

        /**
         * Rep Level that group members must be to listen or provide audio.
         */
        minRepLevel?: number;

        /**
         * Audio stage type chosen for the group
         */
        stageId: number;
    }
}

export interface IGroupAudioSlotList {
    body: {

        /**
         * Required. Single Group ID to retrieve the audio slot information for.
         */
        id: number;

        /**
         * Optional. Flag denoting whether or not to subscribe to Audio Slot updates for the given group ID. Defaults to false.
         */
        subscribe?: boolean;
    }
}

export interface IGroupAudioSlotUpdate {
    body: {
        /**
         * (Required) The ID of the group to update slots for.
         */
        id: number;

        slot: {
            
            /**
             * (Required) ID of the slot within a group Audio Profile.
             */
            id: number;

            /**
             * Whether or not Audio slot is locked
             */
            locked: boolean;
        }
    }
}

export interface IGroupAudioBroadcast {
    body: {
        /**
         * (Required) Group Id to broadcast the audio to.
         */
        id: number;

        /**
         * (Required) Slot Id to broadcast the audio to.
         */
        slotId: number;

        /**
         * (Required) Session Description Protocol (SDP) message
         */
        sdp: string;
    }
}

export interface IGroupAudioBroadcastUpdate {
    body: {
        /**
         * (Required) Group Id to update the audio broadcast for.
         */
        id: number;

        /**
         * (Required) Slot Id to update the audio broadcast for.
         */
        slotId: number;

        /**
         * (Required) The ID of the subscriber making the request.
         */
        occupierId: number;

        /**
         * Whether or not the occupier is muted. Defaults to false
         */
        occupierMuted: boolean;
    }
}

export interface IGroupAudioBroadcastDisconnect {
    body: {
        /**
         * (Required) Group Id to update the audio broadcast for.
         */
        id: number;

        /**
         * (Required) Slot Id to update the audio broadcast for.
         */
        slotId: number;

        /**
         * (Required) The ID of the subscriber making the request.
         */
        occupierId: number;
    }
}

export interface IGroupAudioConsume {
    body: {
        /**
         * (Required) Group Id to broadcast the audio to.
         */
        id: number;

        /**
         * (Required) Slot Id to broadcast the audio to.
         */
        slotId: number;

        /**
         * (Required) Session Description Protocol (SDP) message
         */
        sdp: string;
    }
}