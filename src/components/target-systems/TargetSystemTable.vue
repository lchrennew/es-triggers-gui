<template>
    <path-data-table>
        <a-table-column key="url" #="{record}" title="目标地址">
            {{ record.spec.url }}
        </a-table-column>
        <a-table-column key="actions" #="{record}" width="100px">
            <a-space class="actions">
                <configurer-opener :model="record" :reload="reload" :configurer="Configurer"/>
            </a-space>
        </a-table-column>
    </path-data-table>
</template>

<script setup>
import ConfigurerOpener from "../common/ConfigurerOpener.vue";
import Configurer from './Configurer.vue'
import PathDataTable from "../common/PathDataTable.vue";</script>
