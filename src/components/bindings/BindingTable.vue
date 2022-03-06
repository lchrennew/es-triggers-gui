<template>
    <path-data-table/>
</template>

<script setup>
import BindingConfigurer from './BindingConfigurer.vue'
import PathDataTable from "../common/PathDataTable.vue";
import { provide } from "vue";

provide('configurer', BindingConfigurer)
provide('configurerProps', null)
</script>
