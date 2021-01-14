import type { ITipAddBody, ITipAddReq, ITipDetailBody, ITipDetailReq, ITipGroupSubscribeReq, ITipSummaryBody, ITipSummaryReq, ITipLeaderboardGroupBody, ITipLeaderboardGroupReq, ITipLeaderboardGroupSummaryBody, ITipLeaderboardGroupSummaryReq, ITipLeaderboardGlobalBody, ITipLeaderboardGlobalReq, ITipLeaderboardGlobalSummaryBody, ITipLeaderboardGlobalSummaryReq } from 'models.wolf.js';
import type IOClient from '../IOClient';

export const TipAdd = async (io: IOClient, data: ITipAddBody) =>
    await io.Emit<ITipAddReq>('tip add', { body: data });

export const TipDetail = async (io: IOClient, data: ITipDetailBody) =>
    await io.Emit<ITipDetailReq>('tip detail', { body: data });

export const TipSummary = async (io: IOClient, data: ITipSummaryBody) =>
    await io.Emit<ITipSummaryReq>('tip summary', { body: data });

export const TipGroupSubscribe = async (io: IOClient) =>
    await io.Emit<ITipGroupSubscribeReq>('tip group subscribe', {});

export const TipLeaderboardGroup = async (io: IOClient, data: ITipLeaderboardGroupBody) =>
    await io.Emit<ITipLeaderboardGroupReq>('tip leaderboard group', { body: data });

export const TipLeaderboardGroupSummary = async (io: IOClient, data: ITipLeaderboardGroupSummaryBody) =>
    await io.Emit<ITipLeaderboardGroupSummaryReq>('tip leaderboard group summary', { body: data });

export const TipLeaderboardGlobal = async (io: IOClient, data: ITipLeaderboardGlobalBody) =>
    await io.Emit<ITipLeaderboardGlobalReq>('tip leaderboard global', { body: data });

export const TipLeaderboardGlobalSummary = async (io: IOClient, data: ITipLeaderboardGlobalSummaryBody) =>
    await io.Emit<ITipLeaderboardGlobalSummaryReq>('tip leaderboard global summary', { body: data });