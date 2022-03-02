<script setup>

import DefaultLayout from "./layout/DefaultLayout.vue";
</script>

<template>
    <default-layout/>
</template>

<style lang="less">
#app {
    min-height: 100%;
    display: flex;

    .actions button {
        border: none 0;
        background: transparent;
        cursor: pointer;
        color: #ccc;

        &:hover {
            color: #7c7c7c;
        }

        &:focus {
            outline: none;
        }
    }
}
</style>
