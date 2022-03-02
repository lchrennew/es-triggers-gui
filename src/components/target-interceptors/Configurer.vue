<template>
    <a-form :label-col="{span: 4}" :wrapper-col="{span: 20}">
        <a-form-item label="标识">
            <a-input v-model:value="modelRef.name"/>
        </a-form-item>
        <a-form-item label="名称">
            <a-input v-model:value="modelRef.metadata.title"/>
        </a-form-item>
        <a-form-item label="脚本">
            <a-textarea v-model:value="modelRef.spec.script"/>
        </a-form-item>
    </a-form>
    <drawer-footer>
        <a-button @click="resetFields"/>
        <path-data-saver :validate="validate" :data="modelRef" :reload="reload"/>
    </drawer-footer>
</template>

<script setup>
import { reactive } from "vue";
import { clone } from "../../utils/objects.js";
import { useForm } from "ant-design-vue/es/form/index.js";
import DrawerFooter from "../common/drawer/DrawerFooter.vue";
import PathDataSaver from "../common/PathDataSaver.vue";

const props = defineProps([ 'model', 'reload' ])
const defaultModel = { name: null, metadata: { title: null }, spec: {} }
const modelRef = reactive(clone(props.model ?? defaultModel))
const rulesRef = reactive({})
const { validate, resetFields, validateInfos } = useForm(modelRef, rulesRef)

</script>
