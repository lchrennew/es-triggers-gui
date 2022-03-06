<template>
    <a-layout-header class="layout-header">
        <a-menu :selected-keys="currentKeys" mode="horizontal" theme="dark" @select="redirect">
            <a-menu-item v-for="route in routes" :key="route.name">{{ route.name }}</a-menu-item>
        </a-menu>

        <div class="right">
            <drawer-opener #="{open}" :component="Wizard" :props="{title: '创建转化向导', width: 800}" footer>
                <a-button @click="open">
                    <plus-outlined/>
                </a-button>
            </drawer-opener>
        </div>
    </a-layout-header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import DrawerOpener from "../components/common/drawer/DrawerOpener.vue";
import Wizard from "../components/Wizard.vue";

const currentKeys = ref('')
const route = useRoute()
const router = useRouter()
const redirect = ({ key }) => router.push({ name: key })
const { routes } = router.options

watchEffect(() => currentKeys.value = [ route.name?.split('/').shift() ])

</script>

<style lang="less" scoped>
.layout-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
