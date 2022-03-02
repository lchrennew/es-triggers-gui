import { getData } from "./api.js";

export const getListeners = () => getData('listeners')
