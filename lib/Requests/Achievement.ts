import type IOClient from "../IOClient";

export const AchievementList = async (io: IOClient, data: any) =>
    await io.Emit('achievement list', data);

export const AchievementSubscriberList = async (io: IOClient, data: any) =>
    await io.Emit('achievement subscriber list', data);