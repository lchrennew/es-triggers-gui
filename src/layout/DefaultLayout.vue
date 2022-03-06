<template>
    <a-layout>
        <layout-header/>
        <a-layout-content style="padding: 60px;">
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<script setup>
import LayoutHeader from "./LayoutHeader.vue";
import { useRoute } from "vue-router";
import { computed, provide } from "vue";

const route = useRoute()
provide('path', computed(() => route.path.endsWith('/') ? route.path.substring(0, route.path.length - 1) : route.path))
</script>

<style scoped>

</style>
