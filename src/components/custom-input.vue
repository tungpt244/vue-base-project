<template>
  <input type="text" v-model="value" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits<{ (e: 'update:modelValue', value?: string): void }>()
const props = defineProps<{ modelValue: string }>()

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>
