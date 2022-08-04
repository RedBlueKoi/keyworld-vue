<script setup lang="ts">
  import useCategory from "@/composables/api/useCategory"
  import { capitalize } from "@/utils"

  defineProps<{ productName: string }>()

  const { category } = useCategory()
</script>

<template>
  <nav>
    <ul class="flex justify-start items-center gap-2">
      <li>
        <router-link class="link-primary link-animation" :to="{ name: 'home' }">
          Home
        </router-link>
      </li>
      <li aria-hidden="true">/</li>
      <li>
        <router-link
          class="link-primary link-animation"
          :to="{ name: 'category' }">
          {{ capitalize(category?.name) }}
        </router-link>
      </li>
      <li aria-hidden="true">/</li>
      <li>
        <span>{{ productName }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="postcss"></style>
