<template>
    <a-form :label-col="{span: 4}" :wrapper-col="{span: 20}">
        <a-form-item label="标识">
            <a-input v-model:value="modelRef.name" :disabled="!!model?.name"/>
        </a-form-item>
        <a-form-item label="名称">
            <a-input v-model:value="modelRef.metadata.title" :placeholder="modelRef.name || '请输入名称'"/>
        </a-form-item>
        <slot :modelRef="modelRef"/>
    </a-form>
    <drawer-footer>
        <a-button @click="resetFields"/>
        <path-data-saver
            v-bind="{data: modelRef, validate, path}"
            @saved="emit('saved', modelRef)"/>
    </drawer-footer>
</template>

<script setup>
import { reactive } from "vue";
import { clone } from "../../utils/objects.js";
import { useForm } from "ant-design-vue/es/form/index.js";
import DrawerFooter from "../common/drawer/DrawerFooter.vue";
import PathDataSaver from "../common/PathDataSaver.vue";

const props = defineProps({ model: { type: Object }, path: String, })
const defaultModel = { name: null, metadata: { title: null }, spec: {} }
const modelRef = reactive(clone(props.model ?? defaultModel))
const rulesRef = reactive({})
const { validate, resetFields, validateInfos } = useForm(modelRef, rulesRef)
const emit = defineEmits([ 'saved' ])
</script>
