<template>
    <data-loader #="props" :hash="$route.fullPath" :load-data="getPathData" :load-data-args="$route.fullPath">
        <slot v-bind="props"/>
    </data-loader>
</template>

<script setup>
import DataLoader from "./DataLoader.vue";
import { getPathData } from "../../services/models.js";</script>

<style scoped>

</style>
