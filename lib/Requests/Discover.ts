import type IOClient from "../IOClient";
import type { IGroupDiscoveryList } from "../ReqParams/Discover";

export const GroupDiscoveryList = async (io: IOClient, data: IGroupDiscoveryList) =>
    await io.Emit('group discovery list', data);

export const GroupRecommendationList = async (io: IOClient) =>
    await io.Emit('group recommendation list', {});