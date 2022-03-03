<template>
    <path-data-table #="{reload}">
        <a-table-column key="name" #="{record}" title="监听地址">
            <a-typography-text copyable>
                {{ host }}/hook/{{ record.name }}
            </a-typography-text>
        </a-table-column>
        <a-table-column key="triggers" #="{record}" title="触发器">
            <a-tag v-for="trigger in record.spec.triggers" :key="trigger">{{ trigger }}</a-tag>
        </a-table-column>
        <a-table-column key="actions" #="{record}" width="100px">
            <a-space class="actions">
                <configurer-opener :configurer="ListenerConfigurer" :model="record" @saved="reload"/>
            </a-space>
        </a-table-column>
    </path-data-table>
</template>

<script setup>
import ConfigurerOpener from "../common/ConfigurerOpener.vue";
import ListenerConfigurer from './ListenerConfigurer.vue'
import PathDataTable from "../common/PathDataTable.vue";

const host = import.meta.env.VITE_API_HOST
</script>
