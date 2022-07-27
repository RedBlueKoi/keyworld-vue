<template>
  <h1
    class="text-[40px] font-[400] font-normal leading-[48px] color-[#34495e] not-italic">
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
