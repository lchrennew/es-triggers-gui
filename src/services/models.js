import { getData } from "./api.js";
import { POST } from "es-fetch-api/middlewares/methods.js";
import { json } from "es-fetch-api/middlewares/body.js";

export const getPathData = path => getData(path)
export const savePathData = (path, name, data) => getData(`${path.split('/').filter(p=>p).join('/')}/${name}`, POST, json(data))
