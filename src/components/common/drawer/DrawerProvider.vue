<template>
    <a-drawer
        v-model:visible="drawerVisible"
        v-bind="{ width: 600, destroyOnClose: true, ...drawerProps }"
        @afterVisibleChange="visible=>drawerLoaded=visible"
    >
        <component :is="drawerComponent" v-bind="drawerComponentProps||{}"/>
        <template #footer v-if="drawerFooter">
            <div :id="drawerFooterId"/>
        </template>
    </a-drawer>
    <slot/>
</template>

<script setup>
import { computed, provide, ref, shallowRef } from "vue";
import { generateObjectID } from "es-object-id";

const drawerProps = ref(null)
const drawerVisible = ref(false)
const drawerComponent = shallowRef(null)
const drawerComponentProps = ref(null)
const drawerFooterId = `drawer-footer-${generateObjectID()}`
const drawerFooter = shallowRef(false)
const drawerLoaded = ref(false)

const openDrawer = (props, component, compProps, footer = false) => {
    drawerProps.value = props
    drawerComponent.value = component
    drawerComponentProps.value = compProps
    drawerVisible.value = true
    drawerFooter.value = footer
}

const closeDrawer = () => drawerVisible.value = false

provide('openDrawer', openDrawer)
provide('closeDrawer', closeDrawer)
provide('drawerFooterId', drawerFooterId)
provide('drawerLoaded', computed(() => drawerLoaded.value))
provide('drawerFooter', computed(() => drawerFooter.value))
</script>

<style scoped lang="less">
[id^='drawer-footer-'] {
    text-align: right;
}
</style>
