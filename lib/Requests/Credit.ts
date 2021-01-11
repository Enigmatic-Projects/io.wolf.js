import type IOClient from "../IOClient";

export const StoreCreditBalance = async (io: IOClient, data: any) =>
    await io.Emit('store credit balance', data);