<template>
    <model-configurer #="{modelRef}">
        <a-form-item label="目标地址">
            <a-input v-model:value="modelRef.spec.url"/>
        </a-form-item>
    </model-configurer>
</template>

<script setup>
import ModelConfigurer from "../common/ModelConfigurer.vue";</script>
