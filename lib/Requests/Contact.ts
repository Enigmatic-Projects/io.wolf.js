import type IOClient from "../IOClient";

export const SubscriberContactList = async (io: IOClient, data: any) =>
    await io.Emit('subscriber contact list', data);

export const SubscriberContactAdd = async (io: IOClient, data: any) =>
    await io.Emit('subscriber contact add', data);

export const SubscriberContactDelete = async (io: IOClient, data: any) =>
    await io.Emit('subscriber contact delete', data);

