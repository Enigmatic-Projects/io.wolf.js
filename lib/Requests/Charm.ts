import type IOClient from "../IOClient";
import type { ICharmList, ICharmSubscriberActiveList, ICharmSubscriberDelete, ICharmSubscriberExpiredList, ICharmSubscriberSelectedList, ICharmSubscriberSetSelected, ICharmSubscriberStatistics, ICharmSubscriberSummaryList } from "../ReqParams/Charm";

export const CharmList = async (io: IOClient, data: ICharmList) =>
    await io.Emit('charm list', { body: data });

export const CharmStarredList = async (io: IOClient) =>
    await io.Emit('charm starred list', {});

export const CharmSubscriberActiveList = async (io: IOClient, data: ICharmSubscriberActiveList) =>
    await io.Emit('charm subscriber active list', { body: data });

export const CharmSubscriberExpiredList = async (io: IOClient, data: ICharmSubscriberExpiredList) =>
    await io.Emit('charm subscriber expired list', { body: data });

export const CharmSubscriberDelete = async (io: IOClient, data: ICharmSubscriberDelete) =>
    await io.Emit('charm subscriber delete', { body: data });

export const CharmSubscriberSelectedList = async (io: IOClient, data: ICharmSubscriberSelectedList) =>
    await io.Emit('charm subscriber selected list', { body: data });

export const CharmSubscriberSetSelected = async (io: IOClient, data: ICharmSubscriberSetSelected) =>
    await io.Emit('charm subscriber set selected', { body: data });

export const CharmSubscriberSummaryList = async (io: IOClient, data: ICharmSubscriberSummaryList) =>
    await io.Emit('charm subscriber summary list', { body: data });

export const CharmSubscriberStatistics = async (io: IOClient, data: ICharmSubscriberStatistics) =>
    await io.Emit('charm subscriber statistics', { body: data });