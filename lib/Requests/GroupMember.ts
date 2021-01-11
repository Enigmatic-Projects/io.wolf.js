import type IOClient from "../IOClient";

export const GroupMemberList = async (io: IOClient, data: any) =>
    await io.Emit('group member list', data);

export const GroupMemberAdd = async (io: IOClient, data: any) =>
    await io.Emit('group member add', data);

export const GroupMemberUpdate = async (io: IOClient, data: any) =>
    await io.Emit('group member update', data);

export const GroupMemberDelete = async (io: IOClient, data: any) =>
    await io.Emit('group member delete', data);