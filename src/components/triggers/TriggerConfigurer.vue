<template>
    <model-configurer #="{modelRef}">
        <drawer-provider>
            <picker-form-item
                v-model:value="modelRef.spec.sourceInterceptor"
                :configurer="SourceInterceptorConfigurer"
                help="按哪种规则对输入请求进行过滤？"
                model="source-interceptors"
                title="输入拦截"
            />
            <picker-form-item
                v-model:value="modelRef.spec.targetInterceptor"
                :configurer="TargetInterceptorConfigurer"
                help="按哪种规则对输出请求进行过滤？"
                model="target-interceptors"
                title="输出拦截"/>
            <picker-form-item
                v-model:value="modelRef.spec.binding"
                :configurer="BindingConfigurer"
                help="按哪种规则从输入请求提取数据？"
                model="bindings"
                title="数据绑定"/>
            <picker-form-item
                v-model:value="modelRef.spec.binding"
                :configurer="BindingConfigurer"
                help="按哪种规则从输入请求提取数据？"
                model="bindings"
                title="数据绑定"/>
            <picker-form-item
                v-model:value="modelRef.spec.template"
                :configurer="TemplateConfigurer"
                help="按什么模版组装输出请求？"
                model="templates"
                title="输出模版"/>
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
import PickerFormItem from "../common/PickerFormItem.vue";</script>
