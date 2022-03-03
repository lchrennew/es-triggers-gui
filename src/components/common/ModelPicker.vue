<template>
    <loaded-data-picker :get-option="getOption" :hash="model" :multiple="multiple" :width="width" :add-on="addOn">
        <template #add-on="{reload}">
            <slot name="add-on" :reload="reload"/>
        </template>
    </loaded-data-picker>
</template>

<script setup>
import LoadedDataPicker from "./LoadedDataPicker.vue";

const getOption = model => ({ label: model.metadata.title, value: model.name })
defineProps({
    model: { type: String, required: true },
    multiple: Boolean,
    width: String,
    addOn: Boolean,
})
</script>

<style scoped>

</style>
