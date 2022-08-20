<script setup lang="ts">
  import { useCategory, useProducts } from "@/composables/api"
  import { getSlug } from "@/utils"
  import { watchEffect } from "vue"
  import { useRouter } from "vue-router"
  import PageTitle from "@/components/PageTitle.vue"
  import ProductCard from "../components/ProductCard.vue"

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
    <div class="py-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="products">
        <router-link
          v-for="product in products"
          class="product"
          :to="`/categories/${getSlug(category.name)}/${getSlug(product.name)}`"
          :key="product.id">
          <product-card :product="product" />
        </router-link>
      </div>
    </div>
  </main>
  <div v-else>Loading...</div>
</template>

<style scoped lang="postcss"></style>
