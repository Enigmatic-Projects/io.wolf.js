import type IOClient from "../IOClient";

export const Search = async (io: IOClient, data: any) =>
    await io.Emit('search', data);