<template>
    <a-button type="primary" @click="save">保存</a-button>
</template>

<script setup>
import { savePathData } from "../../services/models.js";
import { message } from "ant-design-vue";
import { inject } from "vue";

const props = defineProps([ 'validate', 'data', 'reload', 'path' ])
const closeDrawer = inject('closeDrawer')
const emit = defineEmits([ 'saved' ])
const save = async () => {
    try {
        await props.validate()
    } catch (error) {
        return
    }
    await savePathData(props.path, props.data.name, props.data)
    message.success('保存成功')
    closeDrawer()
    emit('saved')
}
</script>

<style scoped>

</style>
