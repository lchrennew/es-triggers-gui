<template>
    <data-loader #="props"
                 :hash="path"
                 :load-data="getPathData"
                 :load-data-args="path">
        <slot v-bind="props"/>
    </data-loader>
</template>

<script setup>
import DataLoader from "./DataLoader.vue";
import { getPathData } from "../../services/models.js";
import { inject } from "vue";

const path = inject('path')

</script>

<style scoped>

</style>
