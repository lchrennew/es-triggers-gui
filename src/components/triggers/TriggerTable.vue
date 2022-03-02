<template>
    <data-loader :hash="true" :load-data="getTriggers" #="{loaded, data}">
        <a-table :loading="!loaded" :data-source="data">
            <a-table-column key="name" #="{record}" title="名称">
                {{ record.metadata.title }}
            </a-table-column>
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
        </a-table>
    </data-loader>
</template>

<script setup>
import DataLoader from "../common/DataLoader.vue";
import { getTriggers } from "../../services/triggers.js";</script>
