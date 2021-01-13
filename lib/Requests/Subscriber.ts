import type IOClient from "../IOClient";
import type { ISubscriberGroupList, ISubscriberPresence, ISubscriberProfile, ISubscriberProfileUpdate, ISubscriberSettingsUpdate } from "../ReqParams/Subscriber";

export const SubscriberProfile = async (io: IOClient, data: ISubscriberProfile) =>
    await io.Emit('subscriber profile', data);

export const SubscriberProfileUpdate = async (io: IOClient, data: ISubscriberProfileUpdate) =>
    await io.Emit('subscriber profile update', data);

export const SubscriberGroupList = async (io: IOClient, data: ISubscriberGroupList) =>
    await io.Emit('subscriber group list', data);

export const SubscriberSettings = async (io: IOClient) =>
    await io.Emit('subscriber settings');

export const SubscriberSettingsUpdate = async (io: IOClient, data: ISubscriberSettingsUpdate) =>
    await io.Emit('subscriber settings update', data);

export const SubscriberPresence = async (io: IOClient, data: ISubscriberPresence) =>
    await io.Emit('subscriber presence', data);