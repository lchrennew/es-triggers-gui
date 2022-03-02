<template>
    <data-loader :hash="true" :load-data="getTemplates" #="{loaded, data}">
        <a-table :loading="!loaded" :data-source="data">
            <a-table-column key="name" #="{record}" title="名称">
                {{ record.metadata.title }}
            </a-table-column>
        </a-table>
    </data-loader>
</template>

<script setup>
import DataLoader from "../common/DataLoader.vue";
import { getTemplates } from "../../services/templates.js";</script>
