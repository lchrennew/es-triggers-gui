<template>
    <slot v-bind="attrs"/>
</template>

<script setup>
import { provide, useAttrs } from "vue";

const attrs = useAttrs()

for (const name in attrs) {
    provide(name, attrs[name])
}
</script>

<script>
export default {
    inheritAttrs: false
}
</script>

<style scoped>

</style>
