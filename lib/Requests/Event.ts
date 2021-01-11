import type IOClient from "../IOClient";

export const SubscriberGroupEventList = async (io: IOClient, data: any) =>
    await io.Emit('subscriber group event list', data);

export const SubscriberGroupEventAdd = async (io: IOClient, data: any) =>
    await io.Emit('subscriber group event add', data);

export const SubscriberGroupEventDelete = async (io: IOClient, data: any) =>
    await io.Emit('susbcriber group event delete', data);

export const GroupEvent = async (io: IOClient, data: any) =>
    await io.Emit('group event', data);

export const GroupEventList = async (io: IOClient, data: any) =>
    await io.Emit('group event list', data);

export const GroupEventCreate = async (io: IOClient, data: any) =>
    await io.Emit('group event create', data);

export const GroupEventUpdate = async (io: IOClient, data: any) =>
    await io.Emit('group event update', data);