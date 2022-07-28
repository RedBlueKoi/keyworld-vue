<script setup lang="ts">
  import { RouterView } from "vue-router"
  import PageHeader from "./components/PageHeader.vue"
</script>

<template>
  <page-header />
  <RouterView />
</template>

<style lang="postcss">
  @import "@/assets/base.css";

  #app {
    min-height: 100vh;
  }
</style>
