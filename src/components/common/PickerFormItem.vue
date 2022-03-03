<template>
    <a-form-item :label="title" :help="help">
        <model-picker-with-creator
            v-model:value="value"
            :configurer="configurer"
            :configurer-props="configurerProps"
            :model="model"
            :title="`新建${title}`"
            @saved="onSaved"
            @change="onChange"
        />
    </a-form-item>
</template>

<script setup>
import ModelPickerWithCreator from "./ModelPickerWithCreator.vue";

const props = defineProps({
    value: {},
    configurer: { required: true },
    configurerProps: { type: Object },
    model: { required: true, type: String },
    title: String,
    help: String,
})
const emit = defineEmits([ 'update:value' ])

const onSaved = (model, reload) => {
    emit('update:value', model.name)
    reload()
}

const onChange = value => emit('update:value', value)

</script>

<style scoped>

</style>
