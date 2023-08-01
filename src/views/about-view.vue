<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import { definePage } from 'vue-router/auto'

definePage({
  name: 'about',
  path: '/about'
})
</script>
