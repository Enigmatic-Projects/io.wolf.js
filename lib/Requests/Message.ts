import type IOClient from "../IOClient";

export const MessageGroupSubscribe = async (io: IOClient, data: any) =>
    await io.Emit('message group subscribe', data);

export const MessagePrivateSubscriber = async (io: IOClient, data: any) =>
    await io.Emit('message private subscribe', data);

export const MessageConversationList = async (io: IOClient, data: any) =>
    await io.Emit('message conversation list', data);

export const MessageSetting = async (io: IOClient, data: any) =>
    await io.Emit('message setting', data);

export const MessageSettingUpdate = async (io: IOClient, data: any) =>
    await io.Emit('message setting update', data);

export const MessageUpdate = async (io: IOClient, data: any) =>
    await io.Emit('message update', data);

export const MessageUpdateList = async (io: IOClient, data: any) =>
    await io.Emit('message update list', data);

export const MessageSend = async (io: IOClient, data: any) =>
    await io.Emit('message send', data);

export const SubscriberWhitelistAdd = async (io: IOClient, data: any) =>
    await io.Emit('subscriber whitelist add', data);