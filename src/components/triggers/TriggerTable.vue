<template>
    <path-data-table>
        <a-table-column key="source-interceptor" #="{record}" title="输入拦截">
            {{ record.spec.sourceInterceptor }}
        </a-table-column>
        <a-table-column key="target-interceptor" #="{record}" title="输出拦截">
            {{ record.spec.targetInterceptor }}
        </a-table-column>
        <a-table-column key="binding" #="{record}" title="数据绑定">
            {{ record.spec.binding }}
        </a-table-column>
        <a-table-column key="template" #="{record}" title="输出模版">
            {{ record.spec.template }}
        </a-table-column>
        <a-table-column key="target-system" #="{record}" title="输出目标">
            {{ record.spec.targetSystem }}
        </a-table-column>
    </path-data-table>
</template>

<script setup>
import TriggerConfigurer from './TriggerConfigurer.vue'
import PathDataTable from "../common/PathDataTable.vue";
import { provide } from "vue";

provide('configurer', TriggerConfigurer)
provide('configurerProps', null)
</script>
