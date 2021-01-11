import type IOClient from "../IOClient";

export const GroupDiscoveryList = async (io: IOClient, data: any) =>
    await io.Emit('group discovery list', data);

export const GroupRecommendationList = async (io: IOClient, data: any) =>
    await io.Emit('group recommendation list', data);