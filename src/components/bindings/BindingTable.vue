<template>
    <path-data-loader #="{loaded, data, reload}">
        <a-table :loading="!loaded" :data-source="data">
            <a-table-column key="name" #="{record}" title="名称">
                {{ record.metadata.title }}
            </a-table-column>
            <a-table-column key="actions" #="{record}">
                <a-space class="actions">
                    <configurer-opener :model="record" :reload="reload" :configurer="Configurer"/>
                </a-space>
            </a-table-column>
        </a-table>
    </path-data-loader>
</template>

<script setup>
import PathDataLoader from "../common/PathDataLoader.vue";
import ConfigurerOpener from "../common/ConfigurerOpener.vue";
import Configurer from './Configurer.vue'</script>
