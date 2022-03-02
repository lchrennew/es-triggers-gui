<template>
    <slot :open="open"/>
</template>

<script setup>
import { inject } from "vue";

const openDrawer = inject('openDrawer')
const props = defineProps({
    props: Object,
    component: { required: true },
    componentProps: { required: false },
    footer: { type: Boolean, default: false }
})
const open = () => openDrawer(props)
</script>
