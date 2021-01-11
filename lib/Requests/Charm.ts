import type IOClient from "../IOClient";

export const CharmList = async (io: IOClient, data: any) =>
    await io.Emit('charm list', { body: data });

export const CharmStarredList = async (io: IOClient) =>
    await io.Emit('charm starred list', {});

export const CharmSubscriberActiveList = async (io: IOClient, data: any) =>
    await io.Emit('charm subscriber active list', { body: data });

export const CharmSubscriberExpiredList = async (io: IOClient, data: any) =>
    await io.Emit('charm subscriber expired list', { body: data });

export const CharmSubscriberDelete = async (io: IOClient, data: any) =>
    await io.Emit('charm subscriber delete', { body: data });

export const CharmSubscriberSelectedList = async (io: IOClient, data: any) =>
    await io.Emit('charm subscriber selected list', { body: data });

export const CharmSubscriberSetSelected = async (io: IOClient, data: any) =>
    await io.Emit('charm subscriber set selected', { body: data });

export const CharmSubscriberSummaryList = async (io: IOClient, data: any) =>
    await io.Emit('charm subscriber summary list', { body: data });

export const CharmSubscriberStatistics = async (io: IOClient, data: any) =>
    await io.Emit('charm subscriber statistics', { body: data });