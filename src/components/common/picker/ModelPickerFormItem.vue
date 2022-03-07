<template>
    <a-form-item :label="label" v-bind="validateInfo">
        <path-data-loader
            #="{data, reload, loaded}"
        >
            <drawer-provider>
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
                        @saved="model=>onModelCreated.bind(null,{reload, data})(model)"
                        v-bind="{label, path: name}"
                    >
                        <a-button @click="open" :type="data&&!data.length?'primary':'default'" :disabled="!data">
                            <plus-outlined/>
                        </a-button>
                    </configurer-opener>
                </a-space>
            </drawer-provider>
        </path-data-loader>
    </a-form-item>
</template>

<script setup>
import PathDataLoader from "../PathDataLoader.vue";
import ModelPicker from "./ModelPicker.vue";
import ConfigurerOpener from "../ConfigurerOpener.vue";
import { PlusOutlined } from '@ant-design/icons-vue'
import { inject, provide } from "vue";
import DrawerProvider from "../drawer/DrawerProvider.vue";

const validateInfos = inject('validateInfos')
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

const onModelCreated = (context, model) => {
    const { name } = model
    const value = props.multiple ? [ ...props.value, name ] : name
    onValueChange(value)
    context.reload()
}

provide('path', props.name)
provide('configurer', props.configurer)
provide('configurerProps', props.configurerProps)

const validateInfo = validateInfos[props.name]
</script>

<style scoped>

</style>
