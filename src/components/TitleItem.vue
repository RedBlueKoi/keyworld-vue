<template>
  <h1>
    {{ props.title }}
  </h1>
</template>

<script setup lang="ts">
  const props = defineProps(["title"])
</script>

<style scoped lang="postcss">
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #34495e;
  }
</style>
