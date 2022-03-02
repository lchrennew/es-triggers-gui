import { getData, params } from "./api.js";

export const getTargetSystems = () => getData(`target-systems`)
export const getTargetSystem = name => getData(`target-systems/:name`, params({ name }))
