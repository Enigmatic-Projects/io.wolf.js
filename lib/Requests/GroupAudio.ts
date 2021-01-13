import type IOClient from "../IOClient";
import type { IGroupAudio, IGroupAudioBroadcast, IGroupAudioBroadcastDisconnect, IGroupAudioBroadcastUpdate, IGroupAudioConsume, IGroupAudioSlotList, IGroupAudioSlotUpdate, IGroupAudioUpdate } from "../ReqParams/GroupAudio";

export const GroupAudio = async (io: IOClient, data: IGroupAudio) =>
    await io.Emit('group audio', { body: data });

export const GroupAudioUpdate = async (io: IOClient, data: IGroupAudioUpdate) =>
    await io.Emit('group audio update', { headers: { version: 2 }, body: data });

export const GroupAudioSlotList = async (io: IOClient, data: IGroupAudioSlotList) =>
    await io.Emit('group audio slot list', { body: data });

export const GroupAudioSlotUpdate = async (io: IOClient, data: IGroupAudioSlotUpdate) =>
    await io.Emit('group audio slot update', { body: data });

export const GroupAudioBroadcast = async (io: IOClient, data: IGroupAudioBroadcast) =>
    await io.Emit('group audio broadcast', { body: data });

export const GroupAudioBroadcastUpdate = async (io: IOClient, data: IGroupAudioBroadcastUpdate) =>
    await io.Emit('group audio broadcast update', { body: data });

export const GroupAudioBroadcastDisconnect = async (io: IOClient, data: IGroupAudioBroadcastDisconnect) =>
    await io.Emit('group audio broadcast disconnect', { body: data });

export const GroupAudioConsume = async (io: IOClient, data: IGroupAudioConsume) =>
    await io.Emit('group audio consume', { body: data });