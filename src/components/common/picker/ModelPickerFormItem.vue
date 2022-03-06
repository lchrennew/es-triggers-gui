<template>
    <a-form-item v-bind="{label, name}">
        <path-data-loader
            #="{data, reload, loaded}"
        >
            <a-space>
                <model-picker
                    :disabled="!loaded || !data?.length"
                    :models="data"
                    v-bind="{value, multiple}"
                    width="406px"
                    @update:value="onValueChange"
                />
                <configurer-opener
                    #="{open}"
                    @saved="onModelCreated.bind(null, {reload, data})($event)"
                    v-bind="{label, path: name}"
                >
                    <a-button @click="open" :type="data&&!data.length?'primary':'default'" :disabled="!data">
                        <plus-outlined />
                    </a-button>
                </configurer-opener>
            </a-space>
        </path-data-loader>
    </a-form-item>
</template>

<script setup>
import PathDataLoader from "../PathDataLoader.vue";
import ModelPicker from "./ModelPicker.vue";
import ConfigurerOpener from "../ConfigurerOpener.vue";
import { PlusOutlined } from '@ant-design/icons-vue'
import { provide } from "vue";

const props = defineProps({
    label: String,
    name: String,
    value: {},
    multiple: Boolean,
    configurer: {},
    configurerProps: {},
})

const emit = defineEmits([ 'update:value', 'change' ])

const onValueChange = value => {
    emit('update:value', value)
    emit('change', value)
}

const onModelCreated = (context, { name }) => {
    const value = props.multiple ? [ ...props.value, name ] : name
    onValueChange(value)
    context.reload()
}

provide('path', props.name)
provide('configurer', props.configurer)
provide('configurerProps', props.configurerProps)
</script>

<style scoped>

</style>
