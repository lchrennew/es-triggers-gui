<template>
    <model-configurer #="{modelRef, validateInfos}" :rules="rules">
        <a-form-item label="目标地址" name="url" v-bind="validateInfos.url">
            <a-input v-model:value="modelRef.spec.url"/>
        </a-form-item>
    </model-configurer>
</template>

<script setup>
import ModelConfigurer from "../common/ModelConfigurer.vue";

const rules = {
    url: [
        { required: true }
    ]
}
</script>
