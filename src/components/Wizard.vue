<template>
    <drawer-provider>
        <a-form :label-col="{span: 4}" :wrapper-col="{span: 10}">
            <picker-form-item
                v-model:value="modelRef.listener"
                :configurer="ListenerConfigurer"
                :configurer-props="{hideTrigger:true}"
                help="从哪里接收输入请求？"
                model="listeners"
                title="网络监听"
                @update:value="delete modelRef.trigger"
            />
            <picker-form-item
                v-model:value="modelRef.targetSystem"
                :configurer="TargetSystemConfigurer"
                help="要将输出请求发送给谁？"
                model="target-systems"
                title="转发目标"
                @update:value="delete modelRef.trigger"
            />
            <picker-form-item
                v-if="modelRef.targetSystem && modelRef.listener"
                v-model:value="modelRef.trigger"
                :configurer="TriggerConfigurer"
                help="如何将输入的请求转化为输出请求？"
                :model="`triggers?listener=${encodeURIComponent(modelRef.listener)}&targetSystem=${encodeURIComponent(modelRef.targetSystem)}`"
                title="请求转换"/>
        </a-form>
    </drawer-provider>
    <drawer-footer>
        <a-button>保存</a-button>
    </drawer-footer>
</template>

<script setup>
import DrawerFooter from "./common/drawer/DrawerFooter.vue";
import DrawerProvider from "./common/drawer/DrawerProvider.vue";
import ListenerConfigurer from './listeners/ListenerConfigurer.vue'
import TriggerConfigurer from './triggers/TriggerConfigurer.vue'
import TargetSystemConfigurer from './target-systems/TargetSystemConfigurer.vue'
import { reactive } from "vue";
import PickerFormItem from "./common/PickerFormItem.vue";

const modelRef = reactive({
    listener: null,
    trigger: null,
    targetSystem: null,
})


</script>

<style scoped lang="less">
.wizard {
    display: flex;
}
</style>
