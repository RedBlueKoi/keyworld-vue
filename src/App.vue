<script setup lang="ts">
  import { RouterView } from "vue-router"
  import CartPreview from "./components/CartPreview.vue"
</script>

<template>
  <cart-preview />
  <RouterView />
</template>

<style lang="postcss">
  @import "@/assets/base.css";

  #app {
    min-height: 100vh;
  }
</style>
