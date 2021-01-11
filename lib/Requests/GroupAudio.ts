import type IOClient from "../IOClient";

export const GroupAudio = async (io: IOClient, data: any) =>
    await io.Emit('group audio', { body: data });

export const GroupAudioUpdate = async (io: IOClient, data: any) =>
    await io.Emit('group audio update', { headers: { version: 2 }, body: data });

export const GroupAudioSlotList = async (io: IOClient, data: any) =>
    await io.Emit('group audio slot list', { body: data });

export const GroupAudioSlotUpdate = async (io: IOClient, data: any) =>
    await io.Emit('group audio slot update', { body: data });

export const GroupAudioBroadcast = async (io: IOClient, data: any) =>
    await io.Emit('group audio broadcast', { body: data });

export const GroupAudioBroadcastUpdate = async (io: IOClient, data: any) =>
    await io.Emit('group audio broadcast update', { body: data });

export const GroupAudioBroadcastDisconnect = async (io: IOClient, data: any) =>
    await io.Emit('group audio broadcast disconnect', { body: data });

export const GroupAudioConsume = async (io: IOClient, data: any) =>
    await io.Emit('group audio consume', { body: data });