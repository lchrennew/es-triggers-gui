<template>
    <data-loader #="{loaded, data}" :load-data="getPathData" :load-data-args="hash" :hash="hash">
        <a-select
            :default-active-first-option="true"
            :disabled="!loaded"
            :filter-option="filterOption"
            :not-found-content="null"
            :options="data?.map(getOption)"
            :value="value"
            allow-clear
            :placeholder="placeholder"
            show-search
            @change="onChange"
            :mode="multiple ? 'multiple' : 'combobox'"
        />
    </data-loader>

</template>

<script setup>
import Pinyin from "pinyin-match";
import DataLoader from "./DataLoader.vue";
import { getPathData } from "../../services/models.js";


const filterOption = (input, option) => option.label.toLowerCase().includes(input.toLowerCase()) || Pinyin.match(option.label, input)

defineProps([ 'value', 'hash', 'placeholder', 'getOption', 'multiple' ])
const emit = defineEmits([ 'update:value', 'change' ])
const onChange = value => {
    emit('update:value', value)
    emit('change', value)
}

</script>
