<template>
    <model-configurer #="{modelRef}">
        <a-form-item label="脚本">
            <a-textarea v-model:value="modelRef.spec.script"/>
        </a-form-item>
    </model-configurer>
</template>

<script setup>
import ModelConfigurer from "../common/ModelConfigurer.vue";</script>
