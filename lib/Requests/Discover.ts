import type { IGroupDiscoveryListBody, IGroupDiscoveryListReq, IGroupRecommendationListReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const GroupDiscoveryList = async (io: IOClient, data: IGroupDiscoveryListBody) =>
    await io.Emit<IGroupDiscoveryListReq>('group discovery list', { body: data });

export const GroupRecommendationList = async (io: IOClient) =>
    await io.Emit<IGroupRecommendationListReq>('group recommendation list', {});