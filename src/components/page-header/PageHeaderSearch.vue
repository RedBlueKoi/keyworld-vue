<script setup lang="ts">
  import IconMdi from "@/components/IconMdi.vue"
  import { mdiMagnify } from "@mdi/js"
  import { useVModel } from "@vueuse/core"

  export interface Props {
    modelValue: string
  }
  const props = defineProps<Props>()
  const emit = defineEmits(["update:modelValue"])
  const data = useVModel(props, "modelValue", emit)
</script>

<template>
  <div class="relative h-10 rounded-md overflow-hidden w-2/5 hidden sm:block">
    <input type="text" class="w-full h-full outline-none px-2" v-model="data" />
    <icon-mdi
      :icon="mdiMagnify"
      :size="24"
      class="absolute top-2 right-2 pointer-events-none" />
  </div>
</template>

<style scoped lang="postcss"></style>
