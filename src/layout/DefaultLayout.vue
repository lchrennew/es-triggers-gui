<template>
    <a-layout>
        <layout-header/>
        <a-layout-content style="padding: 60px;">
            <drawer-provider>
                <router-view/>
            </drawer-provider>
        </a-layout-content>
    </a-layout>
</template>

<script setup>
import LayoutHeader from "./LayoutHeader.vue";
import DrawerProvider from "../components/common/drawer/DrawerProvider.vue";</script>

<style scoped>

</style>
