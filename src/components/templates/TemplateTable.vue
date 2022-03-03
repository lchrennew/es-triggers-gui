<template>
    <path-data-table #="{reload}">
        <a-table-column key="actions" #="{record}" width="100px">
            <a-space class="actions">
                <configurer-opener :model="record" :reload="reload" :configurer="Configurer"/>
            </a-space>
        </a-table-column>
    </path-data-table>
</template>

<script setup>import Configurer from "./Configurer.vue";
import ConfigurerOpener from "../common/ConfigurerOpener.vue";
import PathDataTable from "../common/PathDataTable.vue";</script>
