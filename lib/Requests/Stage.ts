import type { IStageListBody, IStageListReq, IStageGroupActiveListBody, IStageGroupActiveListReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const StageList = async (io: IOClient, data: IStageListBody) =>
    await io.Emit<IStageListReq>('stage list', { body: data });

export const StageGroupActiveList = async (io: IOClient, data: IStageGroupActiveListBody) =>
    await io.Emit<IStageGroupActiveListReq>('stage group active list', { body: data });