<script setup lang="ts">
  import { useProduct } from "@/composables/api"
  import { watchEffect } from "vue"
  import { useRouter } from "vue-router"
  import PageTitle from "@/components/PageTitle.vue"

  const { product, isProductLoading } = useProduct()
  const router = useRouter()

  watchEffect(() => {
    if (isProductLoading.value) return
    if (!product.value) router.push("/not-found")
  })
</script>

<template>
  <page-title>{{ product?.name }}</page-title>
</template>

<style scoped lang="postcss"></style>
