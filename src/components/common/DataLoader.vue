<script setup>
import { computed, nextTick, onBeforeUnmount, provide, ref } from 'vue'

const props = defineProps({
    hash: { required: true },
    loadDataArgs: { required: false },
    loadData: { required: true },
    loaded: { required: false, },
    reload: { required: false, }
})

const loaded = ref(false)
const data = ref(null)
const error = ref(false)

const dataLoaded = computed(() => {
    const result = (props.loaded ?? loaded.value) === props.hash
    !result && nextTick(loadData)
    return result
})

const loadData = async () => {
    try {
        data.value = await props.loadData(props.loadDataArgs)
        setLoaded(props.hash)
    } catch (e) {
        error.value = e.message ?? e
    }
}

const setLoaded = ($loaded = false) => props.reload ? props.reload($loaded) : (loaded.value = $loaded)

setLoaded(false)
onBeforeUnmount(() => setLoaded(false))

provide('reload', setLoaded)
</script>

<template>
    <a-alert
        v-if="error"
        :description="error"
        message="数据加载出错了"
        show-icon
        type="error"
    />
    <slot v-else :data="data" :loaded="dataLoaded" :reload="setLoaded"/>
</template>

<style scoped>

</style>
