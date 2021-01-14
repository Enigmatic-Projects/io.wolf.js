import type { IStoreCreditBalanceBody, IStoreCreditBalanceReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const StoreCreditBalance = async (io: IOClient, data: IStoreCreditBalanceBody) =>
    await io.Emit<IStoreCreditBalanceReq>('store credit balance', { body: data });