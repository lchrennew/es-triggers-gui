<template>
    <loaded-data-picker :hash="model" :get-option="getOption" :multiple="multiple"/>
</template>

<script setup>
import LoadedDataPicker from "./LoadedDataPicker.vue";

const getOption = model => ({ label: model.metadata.title, value: model.name })
defineProps({
    model: { type: String, required: true },
    multiple: { type: Boolean }
})
</script>

<style scoped>

</style>
