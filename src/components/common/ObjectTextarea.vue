<template>
    <a-textarea ref="textarea" v-model:value="text" @blur="onChange"/>
</template>

<script setup>
import { ref } from "vue";
import { format, parse, stringify } from "../../services/config.js";
import { Modal } from "ant-design-vue";

const props = defineProps({ value: { type: Object, required: true } })
const textarea = ref()

const text = ref(stringify(props.value))

const emit = defineEmits([ 'update:value' ])
const onChange = e => {
    const newText = e.target.value
    try {
        const newValue = parse(newText)
        emit('update:value', newValue)
    } catch (error) {
        Modal.confirm({
            title: `${format.value.toUpperCase()}格式有误`,
            content: `接下来您打算怎样做？`,
            okText: '继续修改',
            cancelText: '取消修改',
            onOk: () => textarea.value.focus(),
            onCancel: () => {
                text.value = stringify(props.value)
            },
            closable: false,
        })
    }
}
</script>

<style scoped>

</style>
