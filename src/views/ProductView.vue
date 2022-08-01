<script setup lang="ts">
  import { watchEffect } from "vue"
  import { useRouter } from "vue-router"
  import { useProduct } from "@/composables/api"
  import { capitalize } from "@/utils"
  import BreadCrumbs from "@/components/product-page/BreadCrumbs.vue"
  import ImageCarousel from "@/components/product-page/ImageCarousel.vue"
  import PrimaryButton from "@/components/PrimaryButton.vue"
  import PageTitle from "@/components/PageTitle.vue"

  const { product, isProductLoading } = useProduct()
  const router = useRouter()

  watchEffect(() => {
    if (isProductLoading.value) return
    if (!product.value) router.push({ name: "not-found" })
  })
</script>

<template>
  <main class="p-5">
    <BreadCrumbs :product-name="product?.name" v-if="product" />
    <div
      class="grid grid-cols-[repeat(auto-fit,_minmax(640px,1fr))] gap-10 mt-2"
      v-if="product">
      <div class="flex flex-col">
        <ImageCarousel :images="product?.images" class="w-full" />
        <div class="self-end flex-grow my-5 flex items-center">
          <PrimaryButton class="drop-shadow-lg">Add to Cart</PrimaryButton>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <PageTitle>{{ product?.name }}</PageTitle>
          <h1 class="text-4xl">${{ product?.price.toFixed(2) }}</h1>
        </div>
        <section class="mt-10">
          <h2 class="text-2xl">Product Description:</h2>
          <p class="mt-5">
            {{ product?.description }}
          </p>
        </section>
        <section class="mt-10">
          <h2 class="text-2xl">Specs:</h2>
          <ul class="mt-5 list-disc list-inside">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              aut
            </li>
            <li>
              Consequuntur cumque dolore dolores ea est modi natus,
              necessitatibus
            </li>
            <li>
              Officiis quas quos repellat sequi sit tenetur. Amet eveniet fugit
            </li>
            <li>
              Sint soluta veritatis? Ad culpa eos iure molestiae, natus quos
              sint!
            </li>
          </ul>
        </section>
        <section class="mt-10">
          <h2 class="text-2xl">Perks:</h2>
          <ul class="mt-5 list-disc list-inside">
            <li v-for="(perkValue, perkKey) in product?.perks" :key="perkKey">
              {{ capitalize(perkKey) }} :
              {{ capitalize(perkValue) }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped lang="postcss"></style>
