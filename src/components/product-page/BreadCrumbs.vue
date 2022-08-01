<script setup lang="ts">
  import useCategory from "@/composables/api/useCategory"
  import { capitalize } from "@/utils"

  defineProps<{ productName: string }>()

  const { category } = useCategory()
</script>

<template>
  <nav>
    <router-link class="link-primary link-animation" :to="{ name: 'home' }">
      Home
    </router-link>
    <router-link class="link-primary link-animation" :to="{ name: 'category' }">
      {{ capitalize(category?.name) }}
    </router-link>
    <span>{{ productName }}</span>
  </nav>
</template>

<style scoped lang="postcss">
  a {
    &::after {
      content: " / ";
    }
  }
</style>
