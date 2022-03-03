<template>
    <a-drawer
        v-model:visible="drawerVisible"
        v-bind="{ ...defaultProps, ...drawer, ...drawerProps }"
        @afterVisibleChange="visible=>drawerLoaded=visible"
    >
        <component :is="drawerComponent" v-bind="drawerComponentProps||{}"/>
        <template #footer v-if="drawerFooter">
            <div :id="drawerFooterId"/>
        </template>
    </a-drawer>
    <div class="drawer-container" :class="{docked}" ref="container">
        <slot/>
    </div>
</template>

<script setup>
import { computed, provide, ref, shallowRef } from "vue";
import { generateObjectID } from "es-object-id";

const props = defineProps({
    drawer: Object,
    docked: Boolean,
})
const container = ref()
const defaultProps = {
    width: 600, destroyOnClose: true,
    ...(props.docked ? {
        getContainer: () => container.value,
        style: { position: 'absolute' },
    } : {})

}

const drawerProps = ref(null)
const drawerVisible = ref(false)
const drawerComponent = shallowRef(null)
const drawerComponentProps = ref(null)
const drawerFooterId = `drawer-footer-${generateObjectID()}`
const drawerFooter = shallowRef(false)
const drawerLoaded = ref(false)

const openDrawer = ({ props, component, componentProps, footer = false }) => {
    drawerProps.value = props
    drawerComponent.value = component
    drawerComponentProps.value = componentProps
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
.drawer-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
}

[id^='drawer-footer-'] {
    text-align: right;
}
</style>
