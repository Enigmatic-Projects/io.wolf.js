import type IOClient from "../IOClient";
import type { ISubscriberContactAdd, ISubscriberContactDelete, ISubscriberContactList } from "../ReqParams/Contact";

export const SubscriberContactList = async (io: IOClient, data: ISubscriberContactList) =>
    await io.Emit('subscriber contact list', data);

export const SubscriberContactAdd = async (io: IOClient, data: ISubscriberContactAdd) =>
    await io.Emit('subscriber contact add', data);

export const SubscriberContactDelete = async (io: IOClient, data: ISubscriberContactDelete) =>
    await io.Emit('subscriber contact delete', data);

