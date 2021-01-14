import type { ISubscriberProfileBody, ISubscriberProfileReq, ISubscriberProfileUpdateBody, ISubscriberProfileUpdateReq, ISubscriberGroupListBody, ISubscriberGroupListReq, ISubscriberSettingsReq, ISubscriberSettingsUpdateBody, ISubscriberSettingsUpdateReq, ISubscriberPresenceBody, ISubscriberPresenceReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const SubscriberProfile = async (io: IOClient, data: ISubscriberProfileBody) =>
    await io.Emit<ISubscriberProfileReq>('subscriber profile', { headers: { version: 4 }, body: data });

export const SubscriberProfileUpdate = async (io: IOClient, data: ISubscriberProfileUpdateBody) =>
    await io.Emit<ISubscriberProfileUpdateReq>('subscriber profile update', { body: data });

export const SubscriberGroupList = async (io: IOClient, data: ISubscriberGroupListBody) =>
    await io.Emit<ISubscriberGroupListReq>('subscriber group list', { body: data });

export const SubscriberSettings = async (io: IOClient) =>
    await io.Emit<ISubscriberSettingsReq>('subscriber settings');

export const SubscriberSettingsUpdate = async (io: IOClient, data: ISubscriberSettingsUpdateBody) =>
    await io.Emit<ISubscriberSettingsUpdateReq>('subscriber settings update', { body: data });

export const SubscriberPresence = async (io: IOClient, data: ISubscriberPresenceBody) =>
    await io.Emit<ISubscriberPresenceReq>('subscriber presence', { body: data });