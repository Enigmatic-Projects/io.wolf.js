import type IOClient from "../IOClient";
import type { IStageGroupActiveList, IStageList } from "../ReqParams/Stage";

export const StageList = async (io: IOClient, data: IStageList) =>
    await io.Emit('stage list', { body: data });

export const StageGroupActiveList = async (io: IOClient, data: IStageGroupActiveList) =>
    await io.Emit('stage group active list', { body: data });