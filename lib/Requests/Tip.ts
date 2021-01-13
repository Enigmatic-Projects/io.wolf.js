import type IOClient from '../IOClient';
import type { ITipAdd, ITipDetail, ITipLeaderboardGlobal, ITipLeaderboardGlobalSummary, ITipLeaderboardGroup, ITipLeaderboardGroupSummary, ITipSummary } from '../ReqParams/Tip';

export const TipAdd = async (io: IOClient, data: ITipAdd) =>
    await io.Emit('tip add', data);

export const TipDetail = async (io: IOClient, data: ITipDetail) =>
    await io.Emit('tip detail', data);

export const TipSummary = async (io: IOClient, data: ITipSummary) =>
    await io.Emit('tip summary', data);

export const TipGroupSubscribe = async (io: IOClient) =>
    await io.Emit('tip group subscriber', {});

export const TipLeaderboardGroup = async (io: IOClient, data: ITipLeaderboardGroup) =>
    await io.Emit('tip leaderboard group', data);

export const TipLeaderboardGroupSummary = async (io: IOClient, data: ITipLeaderboardGroupSummary) =>
    await io.Emit('tip leaderboard group summary', data);

export const TipLeaderboardGlobal = async (io: IOClient, data: ITipLeaderboardGlobal) =>
    await io.Emit('tip leaderboard global', data);

export const TipLeaderboardGlobalSummary = async (io: IOClient, data: ITipLeaderboardGlobalSummary) =>
    await io.Emit('tip leaderboard global summary', data);