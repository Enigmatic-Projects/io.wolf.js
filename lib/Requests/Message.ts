import type { IMessageGroupSubscribeBody, IMessageGroupSubscribeReq, IMessagePrivateSubscribeReq, IMessageConversationListBody, IMessageConversationListReq, IMessageSettingReq, IMessageSettingUpdateBody, IMessageSettingUpdateReq, IMessageUpdateBody, IMessageUpdateReq, IMessageUpdateListBody, IMessageUpdateListReq, IMessageSendBody, IMessageSendReq, ISubscriberWhitelistAddBody, ISubscriberWhitelistAddReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const MessageGroupSubscribe = async (io: IOClient, data: IMessageGroupSubscribeBody) =>
    await io.Emit<IMessageGroupSubscribeReq>('message group subscribe', { headers: { version: 4 }, body: data });

export const MessagePrivateSubscribe = async (io: IOClient) =>
    await io.Emit<IMessagePrivateSubscribeReq>('message private subscribe', {});

export const MessageConversationList = async (io: IOClient, data: IMessageConversationListBody) =>
    await io.Emit<IMessageConversationListReq>('message conversation list', { headers: { version: 4 }, body: data });

export const MessageSetting = async (io: IOClient) =>
    await io.Emit<IMessageSettingReq>('message setting', {});

export const MessageSettingUpdate = async (io: IOClient, data: IMessageSettingUpdateBody) =>
    await io.Emit<IMessageSettingUpdateReq>('message setting update', { body: data });

export const MessageUpdate = async (io: IOClient, data: IMessageUpdateBody) =>
    await io.Emit<IMessageUpdateReq>('message update', { body: data });

export const MessageUpdateList = async (io: IOClient, data: IMessageUpdateListBody) =>
    await io.Emit<IMessageUpdateListReq>('message update list', { body: data });

export const MessageSend = async (io: IOClient, data: IMessageSendBody) =>
    await io.Emit<IMessageSendReq>('message send', { body: data });

export const SubscriberWhitelistAdd = async (io: IOClient, data: ISubscriberWhitelistAddBody) =>
    await io.Emit<ISubscriberWhitelistAddReq>('subscriber whitelist add', { body: data });