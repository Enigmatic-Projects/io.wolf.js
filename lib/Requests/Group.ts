import type { IGroupCreateBody, IGroupCreateReq, IGroupProfileBody, IGroupProfileReq, IGroupProfileUpdateBody, IGroupProfileUpdateReq, IGroupStatsBody, IGroupStatsReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const GroupCreate = async (io: IOClient, data: IGroupCreateBody) =>
    await io.Emit<IGroupCreateReq>('group create', { body: data });

export const GroupProfile = async (io: IOClient, data: IGroupProfileBody) =>
    await io.Emit<IGroupProfileReq>('group profile', { headers: { version: 4 }, body: data });

export const GroupProfileUpdate = async (io: IOClient, data: IGroupProfileUpdateBody) =>
    await io.Emit<IGroupProfileUpdateReq>('group profile', { body: data });

export const GroupStats = async (io: IOClient, data: IGroupStatsBody) =>
    await io.Emit<IGroupStatsReq>('group stats', { headers: { version: 2 }, body: data });