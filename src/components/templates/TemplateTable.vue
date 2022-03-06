<template>
    <path-data-table/>
</template>

<script setup>import TemplateConfigurer from "./TemplateConfigurer.vue";
import PathDataTable from "../common/PathDataTable.vue";
import { provide } from "vue";

provide('configurer', TemplateConfigurer)
provide('configurerProps', null)
</script>
