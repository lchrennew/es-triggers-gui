<template>
    <drawer-provider #="{close}">
        <a-form :label-col="{span: 4}" :wrapper-col="{span: 10}">
            <model-picker-form-item
                v-model:value="modelRef.listener"
                :configurer="ListenerConfigurer"
                :configurer-props="{hideTrigger:true}"
                help="从哪里接收输入请求？"
                label="网络监听"
                name="listeners"
                @update:value="delete modelRef.trigger"
            />
            <model-picker-form-item
                v-model:value="modelRef.targetSystem"
                :configurer="TargetSystemConfigurer"
                help="要将输出请求发送给谁？"
                label="转发目标"
                name="target-systems"
                @update:value="delete modelRef.trigger"
            />
            <model-picker-form-item
                v-if="modelRef.targetSystem && modelRef.listener"
                v-model:value="modelRef.trigger"
                :configurer="TriggerConfigurer"
                :configurer-props="{targetSystem:modelRef.targetSystem}"
                :query="{listener: modelRef.listener, targetSystem: modelRef.targetSystem }"
                help="如何将输入的请求转化为输出请求？"
                label="请求转换"
                name="triggers"/>
        </a-form>
    </drawer-provider>
    <drawer-footer>
        <a-button @click="close()">完成</a-button>
    </drawer-footer>
</template>

<script setup>
import DrawerFooter from "./common/drawer/DrawerFooter.vue";
import DrawerProvider from "./common/drawer/DrawerProvider.vue";
import ListenerConfigurer from './listeners/ListenerConfigurer.vue'
import TriggerConfigurer from './triggers/TriggerConfigurer.vue'
import TargetSystemConfigurer from './target-systems/TargetSystemConfigurer.vue'
import { reactive } from "vue";
import ModelPickerFormItem from "./common/picker/ModelPickerFormItem.vue";

const modelRef = reactive({
    listener: null,
    trigger: null,
    targetSystem: null,
})
</script>

<style lang="less" scoped>
.wizard {
    display: flex;
}
</style>
