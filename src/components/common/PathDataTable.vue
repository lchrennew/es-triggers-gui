<template>
    <path-data-loader #="{loaded, data, reload}">
        <drawer-provider>
            <a-table :loading="!loaded" :data-source="data" :pagination="{hideOnSinglePage: true}">
                <a-table-column key="name" #="{record}" title="名称" width="400px">
                    {{ record.metadata.title }}
                </a-table-column>
                <slot :reload="reload"/>
            </a-table>
        </drawer-provider>
    </path-data-loader>
</template>

<script setup>
import PathDataLoader from "./PathDataLoader.vue";
import DrawerProvider from "./drawer/DrawerProvider.vue";</script>

<style scoped>

</style>
