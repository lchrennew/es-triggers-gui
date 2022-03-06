<template>
    <drawer-opener
        #="{open}"
        :component="configurer"
        :component-props="{model, onSaved, ...configurerProps, path}"
        :props="{title: model? `编辑${model?.metadata.title}`: `创建${label}`}"
        footer>
        <slot :open="open">
            <button @click="open">
                <form-outlined/>
            </button>
        </slot>
    </drawer-opener>
</template>

<script setup>
import { FormOutlined } from "@ant-design/icons-vue";
import DrawerOpener from "./drawer/DrawerOpener.vue";
import { inject } from "vue";

const props = defineProps({
    path: String,
    model: { type: Object },
    label: String,
})

const emit = defineEmits([ 'saved' ])

const onSaved = model => {
    emit('saved', model)
}

const configurer = inject('configurer')
const configurerProps = inject('configurerProps')
</script>

<style scoped>

</style>
