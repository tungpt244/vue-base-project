<template>
  <div>Bar</div>
</template>

<script setup lang="ts">
import { definePage } from 'vue-router/auto'

definePage({
  name: 'bar',
  path: '/bar'
})
</script>
