<template>
    <path-data-table>
        <a-table-column key="name" #="{record}" title="监听地址">
            <a-typography-text copyable>
                {{ host }}/hook/{{ record.name }}
            </a-typography-text>
        </a-table-column>
        <a-table-column key="triggers" #="{record}" title="触发器">
            <a-tag v-for="trigger in record.spec.triggers" :key="trigger">{{ trigger }}</a-tag>
        </a-table-column>
    </path-data-table>
</template>

<script setup>
import ListenerConfigurer from './ListenerConfigurer.vue'
import PathDataTable from "../common/PathDataTable.vue";
import { provide } from "vue";
import { useRoute } from "vue-router";

const host = import.meta.env.VITE_API_HOST
const route = useRoute()
provide('path', route.fullPath)
provide('configurer', ListenerConfigurer)
provide('configurerProps', null)
</script>
