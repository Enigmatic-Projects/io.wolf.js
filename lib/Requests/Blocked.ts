import type IOClient from "../IOClient";

export const SubscriberBlockList = async (io: IOClient, data: any) =>
    await io.Emit('subscriber block list', data);

export const SubscriberBlockAdd = async (io: IOClient, data: any) =>
    await io.Emit('subscriber block add', data);

export const SubscriberBlockDelete = async (io: IOClient, data: any) =>
    await io.Emit('subscriber block delete', data);