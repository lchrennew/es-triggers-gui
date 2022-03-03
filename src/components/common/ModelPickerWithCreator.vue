<template>
    <model-picker
        :model="model"
        add-on
        width="388px"
    >
        <template #add-on="{reload}">
            <drawer-opener
                #="{open}"
                :component="configurer"
                :component-props="{ onSaved: saved=>emit('saved', saved, reload), ...configurerProps }"
                :props="{title}"
                footer
            >
                <a-button @click="open">新增</a-button>
            </drawer-opener>
        </template>
    </model-picker>
</template>

<script setup>
import DrawerOpener from "./drawer/DrawerOpener.vue";
import ModelPicker from "./ModelPicker.vue";

defineProps({
    configurer: { required: true },
    configurerProps: { type: Object },
    model: { type: String, required: true },
    title: String
})

const emit = defineEmits([ 'saved' ])

</script>

<style scoped>

</style>
