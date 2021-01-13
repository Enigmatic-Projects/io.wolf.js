import type IOClient from "../IOClient";
import type { ISubscriberBlockAdd, ISubscriberBlockDelete, ISubscriberBlockList } from "../ReqParams/Blocked";

export const SubscriberBlockList = async (io: IOClient, data: ISubscriberBlockList) =>
    await io.Emit('subscriber block list', data);

export const SubscriberBlockAdd = async (io: IOClient, data: ISubscriberBlockAdd) =>
    await io.Emit('subscriber block add', data);

export const SubscriberBlockDelete = async (io: IOClient, data: ISubscriberBlockDelete) =>
    await io.Emit('subscriber block delete', data);