<template>
    <model-configurer #="{modelRef}">
        <drawer-provider>
            <model-picker-form-item
                v-model:value="modelRef.spec.sourceInterceptor"
                :configurer="SourceInterceptorConfigurer"
                help="按哪种规则对输入请求进行过滤？"
                label="输入拦截"
                name="source-interceptors"
            />
            <model-picker-form-item
                v-model:value="modelRef.spec.targetInterceptor"
                :configurer="TargetInterceptorConfigurer"
                help="按哪种规则对输出请求进行过滤？"
                label="输出拦截"
                name="target-interceptors"/>
            <model-picker-form-item
                v-if="!hideTargetSystem.bind(null, modelRef)()"
                v-model:value="modelRef.spec.targetSystem"
                :configurer="TargetSystemConfigurer"
                help="请求发送给谁？"
                label="输出目标"
                name="target-systems"/>
            <model-picker-form-item
                v-model:value="modelRef.spec.binding"
                :configurer="BindingConfigurer"
                help="按哪种规则从输入请求提取数据？"
                label="数据绑定"
                name="bindings"/>
            <model-picker-form-item
                v-model:value="modelRef.spec.template"
                :configurer="TemplateConfigurer"
                help="按什么模版组装输出请求？"
                label="输出模版"
                name="templates"/>
        </drawer-provider>
    </model-configurer>
</template>

<script setup>
import ModelConfigurer from "../common/ModelConfigurer.vue";
import DrawerProvider from "../common/drawer/DrawerProvider.vue";
import SourceInterceptorConfigurer from '../source-interceptor/SourceInterceptorConfigurer.vue'
import TargetInterceptorConfigurer from '../target-interceptors/TargetInterceptorConfigurer.vue'
import BindingConfigurer from '../bindings/BindingConfigurer.vue'
import TemplateConfigurer from '../templates/TemplateConfigurer.vue'
import TargetSystemConfigurer from '../target-systems/TargetSystemConfigurer.vue'
import ModelPickerFormItem from "../common/picker/ModelPickerFormItem.vue";

const props = defineProps({
    targetSystem: String
})

const hideTargetSystem = (modelRef) => {
    if (props.targetSystem) modelRef.spec.targetSystem = props.targetSystem
    return !!props.targetSystem
}
</script>
