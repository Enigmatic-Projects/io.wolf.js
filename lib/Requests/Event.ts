import type IOClient from "../IOClient";
import type { IGroupEvent, IGroupEventCreate, IGroupEventList, IGroupEventUpdate, ISubscriberGroupEventAdd, ISubscriberGroupEventDelete, ISubscriberGroupEventList } from "../ReqParams/Event";

export const SubscriberGroupEventList = async (io: IOClient, data: ISubscriberGroupEventList) =>
    await io.Emit('subscriber group event list', data);

export const SubscriberGroupEventAdd = async (io: IOClient, data: ISubscriberGroupEventAdd) =>
    await io.Emit('subscriber group event add', data);

export const SubscriberGroupEventDelete = async (io: IOClient, data: ISubscriberGroupEventDelete) =>
    await io.Emit('susbcriber group event delete', data);

export const GroupEvent = async (io: IOClient, data: IGroupEvent) =>
    await io.Emit('group event', data);

export const GroupEventList = async (io: IOClient, data: IGroupEventList) =>
    await io.Emit('group event list', data);

export const GroupEventCreate = async (io: IOClient, data: IGroupEventCreate) =>
    await io.Emit('group event create', data);

export const GroupEventUpdate = async (io: IOClient, data: IGroupEventUpdate) =>
    await io.Emit('group event update', data);