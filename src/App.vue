<script setup lang="ts">
  import { RouterView } from "vue-router"
  import PageFooter from "@/components/page-footer/PageFooter.vue"
</script>

<template>
  <RouterView />
  <page-footer />
</template>

<style lang="postcss">
  @import "@/assets/base.css";

  #app {
    min-height: 100vh;
  }
</style>
