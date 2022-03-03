<template>
    <model-configurer #="{modelRef}">
        <a-form-item label="路径">
            <a-input v-model:value="modelRef.spec.path"/>
        </a-form-item>
        <a-form-item label="查询">
            <object-textarea v-model:value="modelRef.spec.query"/>
        </a-form-item>
        <a-form-item label="头">
            <object-textarea v-model:value="modelRef.spec.headers"/>
        </a-form-item>
        <a-form-item label="内容">
            <object-textarea v-model:value="modelRef.spec.body"/>
        </a-form-item>
    </model-configurer>
</template>

<script setup>
import ObjectTextarea from "../common/ObjectTextarea.vue";
import ModelConfigurer from "../common/ModelConfigurer.vue";</script>
