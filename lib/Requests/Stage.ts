import type IOClient from "../IOClient";

export const StageList = async (io: IOClient, data: any) =>
    await io.Emit('stage list', { body: data });

export const StageGroupActiveList = async (io: IOClient, data: any) =>
    await io.Emit('stage group active list', { body: data });