import { getData } from "./api.js";
import { ref } from "vue";
import { dump, load } from "js-yaml";

export const getConfig = () => getData('config')

export const format = ref('yaml')
export const stringify = format.value === 'json' ? obj => JSON.stringify(obj) : obj => dump(obj)
export const parse = format.value === 'json' ? obj => JSON.parse(obj) : obj => load(obj)
