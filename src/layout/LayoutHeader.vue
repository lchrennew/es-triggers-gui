<template>
    <a-layout-header class="layout-header">
        <a-menu theme="dark" mode="horizontal" :selected-keys="currentKeys" @select="redirect">
            <a-menu-item v-for="route in routes" :key="route.name">{{ route.name }}</a-menu-item>
        </a-menu>

        <div class="right">
            <a-button>
                <plus-outlined/>
            </a-button>
        </div>
    </a-layout-header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";

const currentKeys = ref('')
const route = useRoute()
const router = useRouter()
const redirect = ({ key }) => router.push({ name: key })
const { routes } = router.options

watchEffect(() => currentKeys.value = [ route.name?.split('/').shift() ])

</script>

<style scoped lang="less">
.layout-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
