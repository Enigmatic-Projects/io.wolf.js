import type { IGroupAudioBody, IGroupAudioReq, IGroupAudioUpdateBody, IGroupAudioUpdateReq, IGroupAudioSlotListBody, IGroupAudioSlotListReq, IGroupAudioSlotUpdateBody, IGroupAudioSlotUpdateReq, IGroupAudioBroadcastBody, IGroupAudioBroadcastReq, IGroupAudioBroadcastUpdateBody, IGroupAudioBroadcastUpdateReq, IGroupAudioBroadcastDisconnectBody, IGroupAudioConsumeBody, IGroupAudioConsumeReq, IGroupAudioBroadcastDisconnectReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const GroupAudio = async (io: IOClient, data: IGroupAudioBody) =>
    await io.Emit<IGroupAudioReq>('group audio', { body: data });

export const GroupAudioUpdate = async (io: IOClient, data: IGroupAudioUpdateBody) =>
    await io.Emit<IGroupAudioUpdateReq>('group audio update', { headers: { version: 2 }, body: data });

export const GroupAudioSlotList = async (io: IOClient, data: IGroupAudioSlotListBody) =>
    await io.Emit<IGroupAudioSlotListReq>('group audio slot list', { body: data });

export const GroupAudioSlotUpdate = async (io: IOClient, data: IGroupAudioSlotUpdateBody) =>
    await io.Emit<IGroupAudioSlotUpdateReq>('group audio slot update', { body: data });

export const GroupAudioBroadcast = async (io: IOClient, data: IGroupAudioBroadcastBody) =>
    await io.Emit<IGroupAudioBroadcastReq>('group audio broadcast', { body: data });

export const GroupAudioBroadcastUpdate = async (io: IOClient, data: IGroupAudioBroadcastUpdateBody) =>
    await io.Emit<IGroupAudioBroadcastUpdateReq>('group audio broadcast update', { body: data });

export const GroupAudioBroadcastDisconnect = async (io: IOClient, data: IGroupAudioBroadcastDisconnectBody) =>
    await io.Emit<IGroupAudioBroadcastDisconnectReq>('group audio broadcast disconnect', { body: data });

export const GroupAudioConsume = async (io: IOClient, data: IGroupAudioConsumeBody) =>
    await io.Emit<IGroupAudioConsumeReq>('group audio consume', { body: data });