import type { ISearchBody, ISearchReq } from "models.wolf.js";
import type IOClient from "../IOClient";

export const Search = async (io: IOClient, data: ISearchBody) =>
    await io.Emit<ISearchReq>('search', { body: data });