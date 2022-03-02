<template>
    <a-button type="primary" @click="save">保存</a-button>
</template>

<script setup>
import { useRoute } from "vue-router";
import { savePathData } from "../../services/models.js";
import { message } from "ant-design-vue";
import { inject } from "vue";

const props = defineProps([ 'validate', 'data', 'reload' ])
const route = useRoute()
const path = route.path.endsWith('/') ? route.path.substring(0, route.path.length - 1) : route.path
const closeDrawer = inject('closeDrawer')
const save = async () => {
    try {
        await props.validate()
    } catch (error) {
        return
    }
    await savePathData(path, props.data.name, props.data)
    message.success('保存成功')
    closeDrawer()
    props.reload?.()
}
</script>

<style scoped>

</style>
