import type { ISubscriberBlockAddBody, ISubscriberBlockAddReq, ISubscriberBlockDeleteBody, ISubscriberBlockDeleteReq, ISubscriberBlockListBody, ISubscriberBlockListReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const SubscriberBlockList = async (io: IOClient, data: ISubscriberBlockListBody) =>
    await io.Emit<ISubscriberBlockListReq>('subscriber block list', { body: data });

export const SubscriberBlockAdd = async (io: IOClient, data: ISubscriberBlockAddBody) =>
    await io.Emit<ISubscriberBlockAddReq>('subscriber block add', { body: data });

export const SubscriberBlockDelete = async (io: IOClient, data: ISubscriberBlockDeleteBody) =>
    await io.Emit<ISubscriberBlockDeleteReq>('subscriber block delete', { body: data });