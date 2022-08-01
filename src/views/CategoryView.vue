<script setup lang="ts">
  import { useCategory, useProducts } from "@/composables/api"
  import { getSlug } from "@/utils"
  import { watchEffect } from "vue"
  import { useRouter } from "vue-router"
  import PageTitle from "@/components/PageTitle.vue"

  const router = useRouter()
  const { category, isCategoryLoading } = useCategory()
  const { products, areProductsLoading } = useProducts()

  watchEffect(() => {
    if (isCategoryLoading.value) return
    if (!category.value) router.push("/not-found")
  })
</script>

<template>
  <main
    class="px-4 py-6"
    v-if="category && !isCategoryLoading && !areProductsLoading">
    <page-title>{{ category.name }}</page-title>
    <div class="products">
      <router-link
        class="product"
        :to="`/categories/${getSlug(category.name)}/${getSlug(product.name)}`"
        v-for="product in products"
        :key="product.id">
        {{ product.name }}
      </router-link>
    </div>
  </main>
  <div v-else>Loading...</div>
</template>

<style scoped lang="postcss"></style>
