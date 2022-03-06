<template>
    <path-data-table>
        <a-table-column key="url" #="{record}" title="目标地址">
            {{ record.spec.url }}
        </a-table-column>
    </path-data-table>
</template>

<script setup>
import TargetSystemConfigurer from './TargetSystemConfigurer.vue'
import PathDataTable from "../common/PathDataTable.vue";
import { provide } from "vue";

provide('configurer', TargetSystemConfigurer)
provide('configurerProps', null)
</script>
