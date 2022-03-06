<template>
    <path-data-table/>
</template>

<script setup>
import TargetInterceptorConfigurer from './TargetInterceptorConfigurer.vue'
import PathDataTable from "../common/PathDataTable.vue";
import { provide } from "vue";

provide('configurer', TargetInterceptorConfigurer)
provide('configurerProps', null)
</script>
