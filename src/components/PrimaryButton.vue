<script setup lang="ts">
  import { computed, withDefaults } from "vue"

  export interface Props {
    type?: "button" | "submit" | "reset"
    color?: "accent" | "primary"
    isFloating?: boolean
    disabled?: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    type: "button",
    color: "primary",
    isFloating: false,
    disabled: false
  })

  const styles = computed<string>(() => {
    const styleArray = [
      "px-6",
      "h-10",
      "inline-flex",
      "justify-between",
      "items-center",
      "text-white",
      "rounded-md"
    ]
    if (props.isFloating) styleArray.push("shadow-md shadow-primary")
    if (props.disabled) styleArray.push("bg-slate-500 opacity-30")
    if (!props.disabled)
      styleArray.push(props.color ? "bg-accent" : "bg-primary")
    styleArray.push(props.color === "accent" ? "bg-accent" : "bg-primary")
    return styleArray.join(" ")
  })
</script>

<template>
  <button :type="type" :disabled="disabled" :class="styles">
    <slot />
  </button>
</template>

<style scoped lang="postcss"></style>
