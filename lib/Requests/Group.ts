import type IOClient from "../IOClient";

export const GroupCreate = async (io: IOClient, data: any) =>
    await io.Emit('group create', data);

export const GroupProfile = async (io: IOClient, data: any) =>
    await io.Emit('group profile', data);

export const GroupStats = async (io: IOClient, data: any) =>
    await io.Emit('group stats', data);

export const GroupProfileUpdate = async (io: IOClient, data: any) =>
    await io.Emit('group profile', data);