<template>
    <path-data-loader #="{loaded, data}">
        <a-table :loading="!loaded" :data-source="data">
            <a-table-column key="name" #="{record}" title="名称">
                {{ record.metadata.title }}
            </a-table-column>
            <a-table-column key="name" #="{record}" title="监听地址">
                <a-typography-text copyable>
                    {{ host }}/hook/{{ record.name }}
                </a-typography-text>
            </a-table-column>
            <a-table-column key="triggers" #="{record}" title="触发器">
                <a-tag v-for="trigger in record.spec.triggers" :key="trigger">{{ trigger }}</a-tag>
            </a-table-column>
        </a-table>
    </path-data-loader>
</template>

<script setup>
import PathDataLoader from "../common/PathDataLoader.vue";

const host = import.meta.env.VITE_API_HOST
</script>
