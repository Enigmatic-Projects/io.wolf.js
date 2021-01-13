import type IOClient from "../IOClient";
import type { ISecurityLogin } from "../ReqParams/Security";

export const SecurityLogin = async (io: IOClient, data: ISecurityLogin) =>
    await io.Emit('security login', data);

export const SecurityLogout = async (io: IOClient) =>
    await io.Emit('security logout', {});

export const SecurityTokenRefresh = async (io: IOClient) =>
    await io.Emit('security token refresh', {});