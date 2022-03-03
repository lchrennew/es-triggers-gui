<template>
    <a-layout>
        <layout-header/>
        <a-layout-content style="padding: 60px;">
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<script setup>
import LayoutHeader from "./LayoutHeader.vue";</script>

<style scoped>

</style>
