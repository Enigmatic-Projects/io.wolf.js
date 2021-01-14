import type { ISubscriberGroupEventListBody, ISubscriberGroupEventListReq, ISubscriberGroupEventAddBody, ISubscriberGroupEventAddReq, ISubscriberGroupEventDeleteBody, ISubscriberGroupEventDeleteReq, IGroupEventBody, IGroupEventReq, IGroupEventListBody, IGroupEventListReq, IGroupEventCreateBody, IGroupEventCreateReq, IGroupEventUpdateBody, IGroupEventUpdateReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const SubscriberGroupEventList = async (io: IOClient, data: ISubscriberGroupEventListBody) =>
    await io.Emit<ISubscriberGroupEventListReq>('subscriber group event list', { body: data });

export const SubscriberGroupEventAdd = async (io: IOClient, data: ISubscriberGroupEventAddBody) =>
    await io.Emit<ISubscriberGroupEventAddReq>('subscriber group event add', { body: data });

export const SubscriberGroupEventDelete = async (io: IOClient, data: ISubscriberGroupEventDeleteBody) =>
    await io.Emit<ISubscriberGroupEventDeleteReq>('susbcriber group event delete', { body: data });

export const GroupEvent = async (io: IOClient, data: IGroupEventBody) =>
    await io.Emit<IGroupEventReq>('group event', { body: data });

export const GroupEventList = async (io: IOClient, data: IGroupEventListBody) =>
    await io.Emit<IGroupEventListReq>('group event list', { body: data });

export const GroupEventCreate = async (io: IOClient, data: IGroupEventCreateBody) =>
    await io.Emit<IGroupEventCreateReq>('group event create', { body: data });

export const GroupEventUpdate = async (io: IOClient, data: IGroupEventUpdateBody) =>
    await io.Emit<IGroupEventUpdateReq>('group event update', { body: data });