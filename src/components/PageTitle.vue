<template>
  <h1 class="text-4xl text-primary">
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
  export interface Props {
    title: string
  }
  defineProps<Props>()
</script>

<style scoped lang="postcss"></style>
