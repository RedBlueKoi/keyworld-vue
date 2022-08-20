<template>
  <div
    class="w-full bg-primary shadow-md shadow-primary rounded-md overflow-hidden relative hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 ease-in-out">
    <img
      :src="product.images[0]"
      :alt="product.name"
      class="object-cover h-full w-full" />
    <div
      class="absolute top-0 left-0 pb-6 w-full h-full flex justify-center items-end bg-primary bg-opacity-40 text-white hover:opacity-0 hover:pb-12 transition-all duration-200 ease-in-out">
      {{ product.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from "@/types/products"
  import { defineProps } from "vue"
  import { getSlug } from "@/utils"
  const props = defineProps<{
    product: Product
  }>()
</script>
