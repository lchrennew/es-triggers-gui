<template>
    <slot :open="open"/>
</template>

<script setup>
import { inject } from "vue";

const openDrawer = inject('openDrawer')
const props = defineProps([ 'props', 'component', 'componentProps', 'footer' ])
const open = () => openDrawer(props.props, props.component, props.componentProps, props.footer)
</script>
