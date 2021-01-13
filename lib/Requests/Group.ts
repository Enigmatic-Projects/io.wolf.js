import type IOClient from "../IOClient";
import type { IGroupCreate, IGroupProfile, IGroupProfileUpdate, IGroupStats } from "../ReqParams/Group";

export const GroupCreate = async (io: IOClient, data: IGroupCreate) =>
    await io.Emit('group create', data);

export const GroupProfile = async (io: IOClient, data: IGroupProfile) =>
    await io.Emit('group profile', data);

export const GroupProfileUpdate = async (io: IOClient, data: IGroupProfileUpdate) =>
    await io.Emit('group profile', data);

export const GroupStats = async (io: IOClient, data: IGroupStats) =>
        await io.Emit('group stats', data);