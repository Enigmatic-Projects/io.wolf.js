import type IOClient from "../IOClient";
import type { IMessageConversationList, IMessageGroupSubscribe, IMessageSend, IMessageSettingUpdate, IMessageUpdate, IMessageUpdateList, ISubscriberWhitelistAdd } from "../ReqParams/Message";

export const MessageGroupSubscribe = async (io: IOClient, data: IMessageGroupSubscribe) =>
    await io.Emit('message group subscribe', data);

export const MessagePrivateSubscribe = async (io: IOClient) =>
    await io.Emit('message private subscribe', {});

export const MessageConversationList = async (io: IOClient, data: IMessageConversationList) =>
    await io.Emit('message conversation list', data);

export const MessageSetting = async (io: IOClient) =>
    await io.Emit('message setting', {});

export const MessageSettingUpdate = async (io: IOClient, data: IMessageSettingUpdate) =>
    await io.Emit('message setting update', data);

export const MessageUpdate = async (io: IOClient, data: IMessageUpdate) =>
    await io.Emit('message update', data);

export const MessageUpdateList = async (io: IOClient, data: IMessageUpdateList) =>
    await io.Emit('message update list', data);

export const MessageSend = async (io: IOClient, data: IMessageSend) =>
    await io.Emit('message send', data);

export const SubscriberWhitelistAdd = async (io: IOClient, data: ISubscriberWhitelistAdd) =>
    await io.Emit('subscriber whitelist add', data);