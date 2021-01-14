import type { ICharmListBody, ICharmListReq, ICharmStarredListReq, ICharmSubscriberActiveListBody, ICharmSubscriberActiveListReq, ICharmSubscriberExpiredListBody, ICharmSubscriberExpiredListReq, ICharmSubscriberDeleteBody, ICharmSubscriberDeleteReq, ICharmSubscriberSelectedListBody, ICharmSubscriberSelectedListReq, ICharmSubscriberSetSelectedBody, ICharmSubscriberSetSelectedReq, ICharmSubscriberSummaryListBody, ICharmSubscriberSummaryListReq, ICharmSubscriberStatisticsBody, ICharmSubscriberStatisticsReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const CharmList = async (io: IOClient, data: ICharmListBody) =>
    await io.Emit<ICharmListReq>('charm list', { body: data });

export const CharmStarredList = async (io: IOClient) =>
    await io.Emit<ICharmStarredListReq>('charm starred list', {});

export const CharmSubscriberActiveList = async (io: IOClient, data: ICharmSubscriberActiveListBody) =>
    await io.Emit<ICharmSubscriberActiveListReq>('charm subscriber active list', { body: data });

export const CharmSubscriberExpiredList = async (io: IOClient, data: ICharmSubscriberExpiredListBody) =>
    await io.Emit<ICharmSubscriberExpiredListReq>('charm subscriber expired list', { body: data });

export const CharmSubscriberDelete = async (io: IOClient, data: ICharmSubscriberDeleteBody) =>
    await io.Emit<ICharmSubscriberDeleteReq>('charm subscriber delete', { body: data });

export const CharmSubscriberSelectedList = async (io: IOClient, data: ICharmSubscriberSelectedListBody) =>
    await io.Emit<ICharmSubscriberSelectedListReq>('charm subscriber selected list', { body: data });

export const CharmSubscriberSetSelected = async (io: IOClient, data: ICharmSubscriberSetSelectedBody) =>
    await io.Emit<ICharmSubscriberSetSelectedReq>('charm subscriber set selected', { body: data });

export const CharmSubscriberSummaryList = async (io: IOClient, data: ICharmSubscriberSummaryListBody) =>
    await io.Emit<ICharmSubscriberSummaryListReq>('charm subscriber summary list', { body: data });

export const CharmSubscriberStatistics = async (io: IOClient, data: ICharmSubscriberStatisticsBody) =>
    await io.Emit<ICharmSubscriberStatisticsReq>('charm subscriber statistics', { body: data });