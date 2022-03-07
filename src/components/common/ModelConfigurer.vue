<template>
    <a-form :label-col="{span: 4}" :wrapper-col="{span: 20}">
        <a-form-item label="标识" v-bind="validateInfos.name" help="用于其他规则引用">
            <a-input v-model:value="modelRef.name" :disabled="!!model?.name"/>
        </a-form-item>
        <a-form-item label="名称" v-bind="validateInfos.title" help="用于显示，默认和标识相同">
            <a-input v-model:value="modelRef.metadata.title" :placeholder="modelRef.name || '请输入名称'"/>
        </a-form-item>
        <slot v-bind="{modelRef, validateInfos}"/>
    </a-form>
    <drawer-footer>
        <a-space>
            <a-button @click="closeDrawer">取消</a-button>
            <a-button type="primary" @click="save" :loading="loading">保存</a-button>
        </a-space>
    </drawer-footer>
</template>

<script setup>
import { inject, provide, reactive, ref } from "vue";
import { clone } from "../../utils/objects.js";
import { useForm } from "ant-design-vue/es/form/index.js";
import DrawerFooter from "../common/drawer/DrawerFooter.vue";
import { savePathData } from "../../services/models.js";
import { message } from "ant-design-vue";

const props = defineProps({ model: { type: Object }, path: String, rules: Object })
const defaultModel = { name: null, metadata: { title: null }, spec: {} }
const modelRef = reactive(clone(props.model ?? defaultModel))
const rulesRef = reactive({
    name: [ {
        required: true,
    } ],
    url: [
        { required: true }
    ],
})

const { validate, resetFields, validateInfos } = useForm(modelRef, rulesRef, {
    onValidate: (...args) => console.log(...args),
    deep: true,
})
const emit = defineEmits([ 'saved' ])
const closeDrawer = inject('closeDrawer')

const loading = ref(false)
const save = async () => {
    loading.value = true
    try {
        await validate(Object.keys(rulesRef))
    } catch (error) {
        loading.value = false
        return
    }
    await savePathData(props.path, modelRef.name, modelRef)
    message.success('保存成功')
    closeDrawer()
    emit('saved', modelRef)
}

provide('validateInfos', validateInfos)
</script>
