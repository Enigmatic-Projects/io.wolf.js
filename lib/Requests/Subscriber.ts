import type IOClient from "../IOClient";

export const SubscriberProfile = async (io: IOClient, data: any) =>
    await io.Emit('subscriber profile', data);

export const SubscriberProfileUpdate = async (io: IOClient, data: any) =>
    await io.Emit('subscriber profile update', data);

export const SubscriberGroupList = async (io: IOClient, data: any) =>
    await io.Emit('subscriber group list', data);

export const SubscriberSettings = async (io: IOClient, data: any) =>
    await io.Emit('subscriber settings', data);

export const SubscriberSettingsUpdate = async (io: IOClient, data: any) =>
    await io.Emit('subscriber settings update', data);

export const SubscriberPresence = async (io: IOClient, data: any) =>
    await io.Emit('subscriber presence', data);