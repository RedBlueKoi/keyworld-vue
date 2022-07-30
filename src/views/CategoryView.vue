<script setup lang="ts">
  import { useCategories } from "@/composables/api"
  import { getSlug } from "@/utils"
  import { ref, watchEffect } from "vue"
  import { useRoute, useRouter } from "vue-router"
  import PageTitle from "@/components/PageTitle.vue"
  import type { Category } from "@/types/products"

  const { params } = useRoute()
  const router = useRouter()
  const { categories, areCategoriesLoading } = useCategories()
  const currentCategory = ref<Category | undefined>(undefined)

  watchEffect(() => {
    if (areCategoriesLoading.value) return
    const { categoryName } = params
    currentCategory.value = categories.value.find(
      (category) => getSlug(category.name) === categoryName
    )
    if (!currentCategory.value) router.push("/not-found")
  })
</script>

<template>
  <div v-if="areCategoriesLoading">Loading...</div>
  <main class="px-4 py-6" v-else>
    <page-title>{{ currentCategory?.name }}</page-title>
  </main>
</template>

<style scoped lang="postcss"></style>
