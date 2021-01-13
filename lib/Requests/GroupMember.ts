import type IOClient from "../IOClient";
import type { IGroupMemberAdd, IGroupMemberDelete, IGroupMemberList, IGroupMemberUpdate } from "../ReqParams/GroupMember";

export const GroupMemberList = async (io: IOClient, data: IGroupMemberList) =>
    await io.Emit('group member list', data);

export const GroupMemberAdd = async (io: IOClient, data: IGroupMemberAdd) =>
    await io.Emit('group member add', data);

export const GroupMemberUpdate = async (io: IOClient, data: IGroupMemberUpdate) =>
    await io.Emit('group member update', data);

export const GroupMemberDelete = async (io: IOClient, data: IGroupMemberDelete) =>
    await io.Emit('group member delete', data);