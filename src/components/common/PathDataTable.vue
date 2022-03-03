<template>
    <path-data-loader #="{loaded, data, reload}">
        <a-table :loading="!loaded" :data-source="data" :pagination="{hideOnSinglePage: true}">
            <a-table-column key="name" #="{record}" title="名称" width="400px">
                {{ record.metadata.title }}
            </a-table-column>
            <slot/>
        </a-table>
    </path-data-loader>
</template>

<script setup>
import PathDataLoader from "./PathDataLoader.vue";</script>

<style scoped>

</style>
