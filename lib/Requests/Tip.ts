import type IOClient from '../IOClient';

export const TipAdd = async (io: IOClient, data: any) =>
    await io.Emit('tip add', data);

export const TipDetail = async (io: IOClient, data: any) =>
    await io.Emit('tip detail', data);

export const TipSummary = async (io: IOClient, data: any) =>
    await io.Emit('tip summary', data);

export const TipGroupSubscribe = async (io: IOClient, data: any) =>
    await io.Emit('tip group subscriber', data);

export const TipLeaderboardGroup = async (io: IOClient, data: any) =>
    await io.Emit('tip leaderboard group', data);

export const TipLeaderboardGroupSummary = async (io: IOClient, data: any) =>
    await io.Emit('tip leaderboard group summary', data);

export const TipLeaderboardGlobal = async (io: IOClient, data: any) =>
    await io.Emit('tip leaderboard global', data);

export const TipLeaderboardGlobalSummary = async (io: IOClient, data: any) =>
    await io.Emit('tip leaderboard global summary', data);