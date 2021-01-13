//#region Request Voids
import type { IAchievementList, IAchievementSubscriberList } from './ReqParams/Achievement';
import type { ISubscriberBlockAdd, ISubscriberBlockDelete, ISubscriberBlockList } from './ReqParams/Blocked';
import type { ICharmList, ICharmSubscriberActiveList, ICharmSubscriberDelete, ICharmSubscriberExpiredList, ICharmSubscriberSelectedList, ICharmSubscriberSetSelected, ICharmSubscriberStatistics, ICharmSubscriberSummaryList } from './ReqParams/Charm';
import type { ISubscriberContactAdd, ISubscriberContactDelete, ISubscriberContactList } from './ReqParams/Contact';
import type { IStoreCreditBalance } from './ReqParams/Credit';
import type { IGroupDiscoveryList } from './ReqParams/Discover';
import type { IGroupEvent, IGroupEventCreate, IGroupEventList, IGroupEventUpdate, ISubscriberGroupEventAdd, ISubscriberGroupEventDelete, ISubscriberGroupEventList } from './ReqParams/Event';
import type { IGroupAudio, IGroupAudioBroadcast, IGroupAudioBroadcastDisconnect, IGroupAudioBroadcastUpdate, IGroupAudioConsume, IGroupAudioSlotList, IGroupAudioSlotUpdate, IGroupAudioUpdate } from './ReqParams/GroupAudio';
import type { IGroupMemberAdd, IGroupMemberDelete, IGroupMemberList, IGroupMemberUpdate } from './ReqParams/GroupMember';
import type { IMessageConversationList, IMessageGroupSubscribe, IMessageSend, IMessageSettingUpdate, IMessageUpdate, IMessageUpdateList, ISubscriberWhitelistAdd } from './ReqParams/Message';
import type { IMetadataUrl } from './ReqParams/Metadata';
import type { ISearch } from './ReqParams/Search';
import type { ISecurityLogin } from './ReqParams/Security';
import type { IStageGroupActiveList, IStageList } from './ReqParams/Stage';
import type { ISubscriberGroupList, ISubscriberPresence, ISubscriberProfile, ISubscriberProfileUpdate, ISubscriberSettingsUpdate } from './ReqParams/Subscriber';
import type { ITipAdd, ITipDetail, ITipLeaderboardGlobal, ITipLeaderboardGlobalSummary, ITipLeaderboardGroup, ITipLeaderboardGroupSummary, ITipSummary } from './ReqParams/Tip';
import * as Achievement from './Requests/Achievement';
import * as Blocked from './Requests/Blocked';
import * as Charm from './Requests/Charm';
import * as Contact from './Requests/Contact';
import * as Credit from './Requests/Credit';
import * as Discover from './Requests/Discover';
import * as Event from './Requests/Event';
import * as Group from './Requests/Group';
import * as GroupAudio from './Requests/GroupAudio';
import * as GroupMember from './Requests/GroupMember';
import * as Message from './Requests/Message';
import * as Metadata from './Requests/Metadata';
import * as Search from './Requests/Search';
import * as Security from './Requests/Security';
import * as Stage from './Requests/Stage';
import * as Subscriber from './Requests/Subscriber';
import * as Tip from './Requests/Tip';

const Requests = {
    ...Achievement,
    ...Blocked,
    ...Charm,
    ...Contact,
    ...Credit,
    ...Discover,
    ...Event,
    ...Group,
    ...GroupAudio,
    ...GroupMember,
    ...Message,
    ...Metadata,
    ...Search,
    ...Security,
    ...Stage,
    ...Subscriber,
    ...Tip
}

export {
    Requests,
    IAchievementList,
    IAchievementSubscriberList,
    ICharmList,
    ICharmSubscriberActiveList,
    ICharmSubscriberDelete,
    ICharmSubscriberExpiredList,
    ICharmSubscriberSelectedList,
    ICharmSubscriberSetSelected,
    ICharmSubscriberStatistics,
    ICharmSubscriberSummaryList,
    IGroupAudio,
    IGroupAudioBroadcast,
    IGroupAudioBroadcastDisconnect,
    IGroupAudioBroadcastUpdate,
    IGroupAudioConsume,
    IGroupAudioSlotList,
    IGroupAudioSlotUpdate,
    IGroupAudioUpdate,
    IGroupDiscoveryList,
    IGroupEvent,
    IGroupEventCreate,
    IGroupEventList,
    IGroupEventUpdate,
    IGroupMemberAdd,
    IGroupMemberDelete,
    IGroupMemberList,
    IGroupMemberUpdate,
    IMessageConversationList,
    IMessageGroupSubscribe,
    IMessageUpdate,
    IMessageUpdateList,
    IMessageSend,
    IMessageSettingUpdate,
    IMetadataUrl,
    ISearch,
    ISecurityLogin,
    IStageList,
    IStageGroupActiveList,
    IStoreCreditBalance,
    ISubscriberBlockAdd,
    ISubscriberBlockDelete,
    ISubscriberBlockList,
    ISubscriberContactAdd,
    ISubscriberContactDelete,
    ISubscriberContactList,
    ISubscriberGroupEventAdd,
    ISubscriberGroupEventDelete,
    ISubscriberGroupEventList,
    ISubscriberGroupList,
    ISubscriberPresence,
    ISubscriberProfile,
    ISubscriberProfileUpdate,
    ISubscriberSettingsUpdate,
    ISubscriberWhitelistAdd,
    ITipAdd,
    ITipDetail,
    ITipLeaderboardGlobal,
    ITipLeaderboardGlobalSummary,
    ITipLeaderboardGroup,
    ITipLeaderboardGroupSummary,
    ITipSummary,
}

module.exports = {
    Requests
};