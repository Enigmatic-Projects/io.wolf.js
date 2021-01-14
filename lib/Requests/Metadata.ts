import type { IMetadataUrlBody, IMetadataUrlReq, IMetadataUrlBlacklistReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const MetadataUrl = async (io: IOClient, data: IMetadataUrlBody) =>
    await io.Emit<IMetadataUrlReq>('metadata url', { body: data });

export const MetadataUrlBlacklist = async (io: IOClient) =>
    await io.Emit<IMetadataUrlBlacklistReq>('metadata url blacklist', {});