<template>
  <svg
    id="base-icon"
    :width="iconSize"
    :height="iconSize"
    :viewBox="defaultViewbox"
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
    fill="none"
    :aria-labelledby="iconName"
    role="presentation">
    <title>{{ iconName }}</title>
    <g>
      <path :d="icon" />
    </g>
  </svg>
</template>

<script setup lang="ts">
  import { computed } from "vue"

  export interface Props {
    size?: number
    icon: string
    iconName?: string
    viebox?: string
    stroke?: "transparent" | "currentColor" | string
  }

  const props = defineProps<Props>()
  const iconSize = computed(() => `${props.size || 14}px`)
  const defaultStroke = computed(() => `${props.stroke || "transparent"}`)
  const defaultViewbox = props.viebox || `0 0 24 24`
</script>

<style scoped lang="postcss">
  .icon {
    stroke: v-bind(defaultStroke);
    fill: currentColor;
    @apply inline-flex;
  }
</style>
