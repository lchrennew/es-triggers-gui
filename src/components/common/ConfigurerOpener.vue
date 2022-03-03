<template>
    <drawer-opener #="{open}"
                   :component="configurer"
                   :component-props="{model, onSaved:()=>emit('saved')}"
                   footer
                   :props="{title: `编辑${model.name}`}">
        <button @click="open">
            <form-outlined/>
        </button>
    </drawer-opener>
</template>

<script setup>
import { FormOutlined } from "@ant-design/icons-vue";
import DrawerOpener from "./drawer/DrawerOpener.vue";

defineProps({
    model: { type: Object, required: true },
    configurer: { required: true }
})

const emit = defineEmits([ 'saved' ])
</script>

<style scoped>

</style>
