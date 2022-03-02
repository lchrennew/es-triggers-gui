import { getApi } from "es-fetch-api";
import { compile } from "path-to-regexp";

export const api = getApi(import.meta.env.VITE_API)
export const getData = async (...args) => {
    const response = await api(...args)
    return await response.json()
}
export const params = obj => async (ctx, next) => {
    const apply = compile(ctx.url.pathname)
    ctx.url.pathname = apply(obj)
    return await next()
}
