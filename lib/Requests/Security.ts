import type { ISecurityLoginBody, ISecurityLoginReq, ISecurityLogoutReq, ISecurityTokenRefreshReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const SecurityLogin = async (io: IOClient, data: ISecurityLoginBody) =>
    await io.Emit<ISecurityLoginReq>('security login', { headers: { version: 2 }, body: data });

export const SecurityLogout = async (io: IOClient) =>
    await io.Emit<ISecurityLogoutReq>('security logout', {});

export const SecurityTokenRefresh = async (io: IOClient) =>
    await io.Emit<ISecurityTokenRefreshReq>('security token refresh', {});