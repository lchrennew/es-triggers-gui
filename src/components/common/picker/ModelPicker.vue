<template>
    <a-select
        :mode="multiple ? 'multiple' : 'combobox'"
        :not-found-content="null"
        :options="options"
        :style="{width}"
        allow-clear
        show-search
        v-bind="{value, placeholder, filterOption}"
        @change="onChange"
    />
</template>

<script setup>
import Pinyin from "pinyin-match";
import { computed } from "vue";

const filterOption = (input, option) => option.label.toLowerCase().includes(input.toLowerCase()) || Pinyin.match(option.label, input)

const props = defineProps({
    value: { required: true },
    placeholder: String,
    models: Array,
    multiple: Boolean,
    width: String,
})

const options = computed(() => props.models?.map(model => ({ label: model.metadata.title, value: model.name })))

const emit = defineEmits([ 'update:value', 'change' ])
const onChange = value => {
    emit('update:value', value)
    emit('change', value)
}

if (options.value?.length === 1 && !props.value) {
    onChange(options.value[0].value)
}

</script>

<style scoped>

</style>
