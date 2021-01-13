import type IOClient from "../IOClient";
import type { IAchievementList, IAchievementSubscriberList } from '../ReqParams/Achievement';

export const AchievementList = async (io: IOClient, data: IAchievementList) =>
    await io.Emit('achievement list', data);

export const AchievementSubscriberList = async (io: IOClient, data: IAchievementSubscriberList) =>
    await io.Emit('achievement subscriber list', data);