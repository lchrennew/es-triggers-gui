<template>
    <path-data-loader #="{loaded, data}">
        <a-table :loading="!loaded" :data-source="data">
            <a-table-column key="name" #="{record}" title="名称">
                {{ record.metadata.title }}
            </a-table-column>
            <a-table-column key="source-interceptor" #="{record}" title="输入拦截">
                {{ record.spec.sourceInterceptor }}
            </a-table-column>
            <a-table-column key="target-interceptor" #="{record}" title="输出拦截">
                {{ record.spec.targetInterceptor }}
            </a-table-column>
            <a-table-column key="binding" #="{record}" title="数据绑定">
                {{ record.spec.binding }}
            </a-table-column>
            <a-table-column key="template" #="{record}" title="输出模版">
                {{ record.spec.template }}
            </a-table-column>
            <a-table-column key="target-system" #="{record}" title="输出目标">
                {{ record.spec.targetSystem }}
            </a-table-column>
            <a-table-column key="actions" #="{record}">
                <a-space class="actions">
                    <drawer-opener #="{open}" :component="Configurer" :props="{title: `编辑${record.name}`}"
                                   :component-props="{model:record}">
                        <button @click="open">
                            <form-outlined/>
                        </button>
                    </drawer-opener>
                    <button>
                        <delete-outlined/>
                    </button>
                </a-space>
            </a-table-column>
        </a-table>
    </path-data-loader>
</template>

<script setup>
import { DeleteOutlined, FormOutlined } from "@ant-design/icons-vue";
import DrawerOpener from "../common/drawer/DrawerOpener.vue";
import Configurer from './Configurer.vue'
import PathDataLoader from "../common/PathDataLoader.vue";</script>
