import type { IGroupMemberListBody, IGroupMemberListReq, IGroupMemberAddBody, IGroupMemberAddReq, IGroupMemberUpdateBody, IGroupMemberUpdateReq, IGroupMemberDeleteBody, IGroupMemberDeleteReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const GroupMemberList = async (io: IOClient, data: IGroupMemberListBody) =>
    await io.Emit<IGroupMemberListReq>('group member list', { headers: { version: 3 }, body: data });

export const GroupMemberAdd = async (io: IOClient, data: IGroupMemberAddBody) =>
    await io.Emit<IGroupMemberAddReq>('group member add', { body: data });

export const GroupMemberUpdate = async (io: IOClient, data: IGroupMemberUpdateBody) =>
    await io.Emit<IGroupMemberUpdateReq>('group member update', { body: data });

export const GroupMemberDelete = async (io: IOClient, data: IGroupMemberDeleteBody) =>
    await io.Emit<IGroupMemberDeleteReq>('group member delete', { body: data });