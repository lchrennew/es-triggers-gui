<template>
    <model-configurer #="{modelRef}">
        <a-form-item label="转化" v-if="!hideTrigger">
            <model-picker v-model:value="modelRef.spec.triggers" model="triggers" multiple/>
        </a-form-item>
    </model-configurer>
</template>

<script setup>
import ModelPicker from "../common/ModelPicker.vue";
import ModelConfigurer from "../common/ModelConfigurer.vue";

defineProps({
    hideTrigger: Boolean
})
</script>
