<template>
    <path-data-loader #="{loaded, data, reload}">
        <drawer-provider>
            <a-table :data-source="data" :loading="!loaded" :pagination="{hideOnSinglePage: true}">
                <a-table-column key="name" #="{record}" title="名称" width="400px">
                    {{ record.metadata.title || record.name }}
                </a-table-column>
                <slot :reload="reload"/>
                <a-table-column key="actions" #="{record:model}" width="100px">
                    <provider :name="model.name">
                        <a-space class="actions">
                            <configurer-opener v-bind="{model, path}" @saved="reload"/>
                        </a-space>
                    </provider>
                </a-table-column>
            </a-table>
        </drawer-provider>
    </path-data-loader>
</template>

<script setup>
import PathDataLoader from "./PathDataLoader.vue";
import DrawerProvider from "./drawer/DrawerProvider.vue";
import ConfigurerOpener from "./ConfigurerOpener.vue";
import { inject } from "vue";
import Provider from "./Provider.vue";

const path = inject('path')

</script>


<style scoped>

</style>
