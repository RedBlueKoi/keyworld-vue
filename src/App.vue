<script setup lang="ts">
  import { RouterView } from "vue-router"
</script>

<template>
  <div class="app">
    <header class="bg-accent">Page header</header>
    <main><RouterView /></main>
    <footer class="bg-primary">Page footer</footer>
  </div>
</template>

<style lang="postcss">
  @import "@/assets/base.css";

  #app {
    min-height: 100vh;
  }
  .app {
    @apply grid grid-cols-1;
    @apply min-h-screen;
    grid-template-rows: auto 1fr auto;
  }
</style>
