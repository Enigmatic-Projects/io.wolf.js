import type IOClient from "../IOClient";
import type { ISearch } from "../ReqParams/Search";

export const Search = async (io: IOClient, data: ISearch) =>
    await io.Emit('search', data);