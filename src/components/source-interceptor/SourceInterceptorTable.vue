<template>
    <path-data-table/>
</template>

<script setup>
import SourceInterceptorConfigurer from './SourceInterceptorConfigurer.vue'
import PathDataTable from "../common/PathDataTable.vue";
import { provide } from "vue";

provide('configurer', SourceInterceptorConfigurer)
provide('configurerProps', null)
</script>
