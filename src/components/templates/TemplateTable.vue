<template>
    <path-data-loader #="{loaded, data}">
        <a-table :loading="!loaded" :data-source="data">
            <a-table-column key="name" #="{record}" title="名称">
                {{ record.metadata.title }}
            </a-table-column>
        </a-table>
    </path-data-loader>
</template>

<script setup>import PathDataLoader from "../common/PathDataLoader.vue";</script>
