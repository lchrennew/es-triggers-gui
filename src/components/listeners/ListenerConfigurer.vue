<template>
    <model-configurer #="{modelRef}">
        <drawer-provider>
            <model-picker-form-item
                v-if="!hideTrigger"
                v-model:value="modelRef.spec.triggers"
                :configurer="TriggerConfigurer"
                help="如何将输入的请求转化为输出请求？"
                label="转化"
                multiple
                name="triggers"
            />
        </drawer-provider>
    </model-configurer>
</template>

<script setup>
import ModelConfigurer from "../common/ModelConfigurer.vue";
import TriggerConfigurer from '../triggers/TriggerConfigurer.vue'
import DrawerProvider from "../common/drawer/DrawerProvider.vue";
import ModelPickerFormItem from "../common/picker/ModelPickerFormItem.vue";

defineProps({
    hideTrigger: Boolean
})

</script>
