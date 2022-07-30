<script setup lang="ts">
  import IconMdi from "@/components/IconMdi.vue"
  import { mdiArrowRight } from "@mdi/js"
  // import type { Product } from "@/types/products"

  const products = [
    {
      description:
        "Some Item with very long name which obviously not gonna fit here and needs to be truncated",
      price: "$320.21"
    },
    {
      description:
        "Some Item with very long name which obviously not gonna fit here and needs to be truncated",
      price: "$285.09"
    },
    {
      description:
        "Some Item with very long name which obviously not gonna fit here and needs to be truncated",
      price: "$212.48"
    },
    {
      description:
        "Some Item with very long name which obviously not gonna fit here and needs to be truncated",
      price: "$156.76"
    }
  ]
</script>

<template>
  <div
    class="bg-defaultBackground shadow-md w-[400px] fixed top-16 right-2 rounded-md overflow-hidden z-20 shadow-primary">
    <div class="bg-primary text-white p-3 flex justify-between items-center">
      <div class="flex flex-col">
        <span>Your cart</span>
        <span class="text-xs">X Items</span>
      </div>
      <div class="price">$69</div>
    </div>
    <ul>
      <li
        class="flex justify-between items-center gap-2 p-3 even:bg-darkBackground">
        <div class="truncate">
          {{ 3 }} x Some Item with very long name which obviously not gonna fit
          here and needs to be truncated
        </div>
        <div class="price">${{ 34 }}</div>
      </li>
      <li
        class="flex justify-between items-center gap-2 p-3 even:bg-darkBackground">
        <div class="truncate">
          {{ 3 }} x Some Item with very long name which obviously not gonna fit
          here and needs to be truncated
        </div>
        <div class="price">${{ 34 }}</div>
      </li>
      <li
        class="flex justify-between items-center gap-2 p-3 even:bg-darkBackground">
        <div class="truncate">
          {{ 3 }} x Some Item with very long name which obviously not gonna fit
          here and needs to be truncated
        </div>
        <div class="price">${{ 34 }}</div>
      </li>
    </ul>
    <div class="flex justify-center py-4">
      <router-link to="checkout" class="button-primary gap-2">
        Checkout
        <icon-mdi :icon="mdiArrowRight" :size="18" />
      </router-link>
    </div>
  </div>
</template>
