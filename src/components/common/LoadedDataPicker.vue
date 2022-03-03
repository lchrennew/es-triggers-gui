<template>
    <data-loader #="{loaded, data, reload}" :load-data="getPathData" :load-data-args="hash" :hash="hash">
        <a-space v-if="addOn">
            <select-picker
                :data="data"
                :disabled="!loaded"
                :get-option="getOption"
                :multiple="multiple"
                :placeholder="placeholder"
                :value="value"
                :width="width"
                @change="onChange"
            />
            <slot name="add-on" :reload="reload"/>
        </a-space>
        <select-picker
            v-else
            :data="data"
            :disabled="!loaded"
            :get-option="getOption"
            :multiple="multiple"
            :placeholder="placeholder"
            :value="value"
            :width="width"
            @change="onChange"
        />
    </data-loader>

</template>

<script setup>
import DataLoader from "./DataLoader.vue";
import { getPathData } from "../../services/models.js";
import SelectPicker from "./SelectPicker.vue";

defineProps({
    value: { required: false },
    hash: String,
    placeholder: String,
    getOption: { required: true, type: Function },
    multiple: Boolean,
    width: String,
    addOn: Boolean
})
const emit = defineEmits([ 'update:value', 'change' ])
const onChange = value => {
    emit('update:value', value)
    emit('change', value)
}

</script>
