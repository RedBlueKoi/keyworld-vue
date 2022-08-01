<script setup lang="ts">
  import { useCategories } from "@/composables/api"
  import PageTitle from "@/components/PageTitle.vue"
  import { getSlug } from "@/utils"

  const { categories } = useCategories()
</script>

<template>
  <main class="px-4 py-6">
    <page-title>Categories</page-title>
    <div class="py-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <router-link
        :to="`categories/${getSlug(category.name)}`"
        class="bg-primary shadow-md shadow-primary rounded-md overflow-hidden relative hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 ease-in-out"
        v-for="category in categories"
        :key="category.id">
        <img
          :src="category.img"
          :alt="category.name"
          class="object-cover h-full w-full" />
        <div
          class="absolute top-0 left-0 pb-6 w-full h-full flex justify-center items-end bg-primary bg-opacity-40 text-white hover:opacity-0 hover:pb-12 transition-all duration-200 ease-in-out">
          {{ category.name }}
        </div>
      </router-link>
    </div>
  </main>
</template>
