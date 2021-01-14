import type { ISubscriberContactListBody, ISubscriberContactListReq, ISubscriberContactAddBody, ISubscriberContactAddReq, ISubscriberContactDeleteBody, ISubscriberContactDeleteReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const SubscriberContactList = async (io: IOClient, data: ISubscriberContactListBody) =>
    await io.Emit<ISubscriberContactListReq>('subscriber contact list', { body: data });

export const SubscriberContactAdd = async (io: IOClient, data: ISubscriberContactAddBody) =>
    await io.Emit<ISubscriberContactAddReq>('subscriber contact add', { body: data });

export const SubscriberContactDelete = async (io: IOClient, data: ISubscriberContactDeleteBody) =>
    await io.Emit<ISubscriberContactDeleteReq>('subscriber contact delete', { body: data });

