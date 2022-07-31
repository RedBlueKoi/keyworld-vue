<script setup lang="ts">
  import { RouterView } from "vue-router"
  import PageHeader from "@/components/page-header/PageHeader.vue"
  import PageFooter from "@/components/page-footer/PageFooter.vue"
  import CartPreview from "./components/CartPreview.vue"
</script>

<template>
  <div class="app">
    <page-header />
    <main class="relative">
      <!--<cart-preview />-->
      <router-view />
    </main>
    <page-footer />
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
