import type IOClient from "../IOClient";

export const MetadataUrl = async (io: IOClient, data: any) =>
    await io.Emit('metadata url', data);

export const MetadataUrlBlacklist = async (io: IOClient, data: any) =>
    await io.Emit('metadata url blacklist', data);