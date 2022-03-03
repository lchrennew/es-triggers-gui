<template>
    <a-select
        :default-active-first-option="true"
        :filter-option="filterOption"
        :mode="multiple ? 'multiple' : 'combobox'"
        :not-found-content="null"
        :options="data?.map(getOption)"
        :placeholder="placeholder"
        :style="{width}"
        :value="value"
        allow-clear
        show-search
        @change="onChange"
    />
</template>

<script setup>import Pinyin from "pinyin-match";


const filterOption = (input, option) => option.label.toLowerCase().includes(input.toLowerCase()) || Pinyin.match(option.label, input)

defineProps({
    value: { required: true },
    placeholder: String,
    data: { type: Array },
    getOption: { type: Function, required: true },
    multiple: Boolean,
    width: String,
})
const emit = defineEmits([ 'update:value', 'change' ])
const onChange = value => {
    emit('update:value', value)
    emit('change', value)
}

</script>

<style scoped>

</style>
