<template>
  <main class="px-8 py-6">
    <page-title>Categories</page-title>
    <div
      class="h-1/2 py-6 grid gap-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <category-card
        v-for="category in categories"
        :key="category.id"
        :category="category" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import PageTitle from "@/components/PageTitle.vue"
  import CategoryCard from "@/components/CategoryCard.vue"
  import { useCategories } from "@/composables/api"

  const { categories } = useCategories()
</script>
