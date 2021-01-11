import type IOClient from "../IOClient";

export const SecurityLogin = async (io: IOClient, data: any) =>
    await io.Emit('security login', data);

export const SecurityLogout = async (io: IOClient, data: any) =>
    await io.Emit('security logout', data);

export const SecurityTokenRefresh = async (io: IOClient, data: any) =>
    await io.Emit('security token refresh', data);