import type IOClient from "../IOClient";
import type { IStoreCreditBalance } from "../ReqParams/Credit";

export const StoreCreditBalance = async (io: IOClient, data: IStoreCreditBalance) =>
    await io.Emit('store credit balance', data);