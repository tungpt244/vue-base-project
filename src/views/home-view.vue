<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { ref } from 'vue'
import { getUser } from '../repository'
import { definePage } from 'vue-router/auto'

definePage({
  name: 'home',
  path: '/'
})

const userId = ref(1)

const { state, execute, isLoading } = useAsyncState(() => getUser(userId.value), undefined, {
  immediate: false,
  delay: 1000,
  resetOnExecute: true
})
</script>

<template>
  <div :loading="isLoading" class="">
    <main>Home</main>

    <div @click="userId++">UserId: {{ userId }}</div>

    <div>
      {{ state }}
    </div>

    <button @click="execute()">Fetch</button>
  </div>
</template>
