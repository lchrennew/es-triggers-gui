<template>
    <data-loader :hash="true" :load-data="getTargetSystems" #="{loaded, data}">
        <a-table :loading="!loaded" :data-source="data">
            <a-table-column key="name" #="{record}" title="名称">
                {{ record.metadata.title }}
            </a-table-column>
            <a-table-column key="url" #="{record}" title="目标地址">
                {{ record.spec.url }}
            </a-table-column>
        </a-table>
    </data-loader>
</template>

<script setup>
import DataLoader from "../common/DataLoader.vue";
import { getTargetSystems } from "../../services/target-systems.js";</script>
