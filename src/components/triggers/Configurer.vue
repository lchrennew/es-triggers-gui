<template>
    <a-form :label-col="{span: 4}" :wrapper-col="{span: 20}" @submit="save">
        <a-form-item label="标识">
            <a-input v-model:value="modelRef.name" :disabled="!!model?.name"/>
        </a-form-item>
        <a-form-item label="名称">
            <a-input v-model:value="modelRef.metadata.title"/>
        </a-form-item>
        <a-form-item label="输入拦截">
            <model-picker model="source-interceptors" v-model:value="modelRef.spec.sourceInterceptor"/>
        </a-form-item>
        <a-form-item label="输出拦截">
            <model-picker model="target-interceptors" v-model:value="modelRef.spec.targetInterceptor"/>
        </a-form-item>
        <a-form-item label="数据绑定">
            <model-picker model="bindings" v-model:value="modelRef.spec.binding"/>
        </a-form-item>
        <a-form-item label="输出模版">
            <model-picker model="templates" v-model:value="modelRef.spec.template"/>
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
import ModelPicker from "../common/ModelPicker.vue";
import DrawerFooter from "../common/drawer/DrawerFooter.vue";
import PathDataSaver from "../common/PathDataSaver.vue";

const props = defineProps([ 'model', 'reload' ])
const defaultModel = { name: null, metadata: { title: null }, spec: {} }
const modelRef = reactive(clone(props.model ?? defaultModel))
const rulesRef = reactive({})
const { validate, resetFields, validateInfos } = useForm(modelRef, rulesRef)

</script>
