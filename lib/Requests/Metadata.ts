import type IOClient from "../IOClient";
import type { IMetadataUrl } from "../ReqParams/Metadata";

export const MetadataUrl = async (io: IOClient, data: IMetadataUrl) =>
    await io.Emit('metadata url', data);

export const MetadataUrlBlacklist = async (io: IOClient) =>
    await io.Emit('metadata url blacklist', {});