import type IOClient from "../IOClient";
import type { IAchievementListBody, IAchievementListReq, IAchievementSubscriberListBody, IAchievementSubscriberListReq, } from 'models.wolf.js';

export const AchievementList = async (io: IOClient, data: IAchievementListBody) =>
    await io.Emit<IAchievementListReq>('achievement list', { body: data });

export const AchievementSubscriberList = async (io: IOClient, data: IAchievementSubscriberListBody) =>
    await io.Emit<IAchievementSubscriberListReq>('achievement subscriber list', { body: data });