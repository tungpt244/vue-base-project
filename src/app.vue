<script setup lang="ts"></script>

<template>
  <div class="container p-10">
    <router-link to="/" class="rounded-full bg-slate-300 px-6 py-3">Home</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
  </div>
</template>
