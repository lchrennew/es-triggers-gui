<script setup>
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'

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
        syncLoaded(props.hash)
    } catch (e) {
        error.value = e.message ?? e
    }
}

const syncLoaded = $loaded => props.reload ? props.reload($loaded) : (loaded.value = $loaded)

syncLoaded(false)
onBeforeUnmount(() => syncLoaded(false))
</script>

<template>
    <a-alert
        v-if="error"
        message="数据加载出错了"
        :description="error"
        type="error"
        show-icon
    />
    <slot v-else :data="data" :loaded="dataLoaded" :reload-data="syncLoaded"/>
</template>

<style scoped>

</style>
