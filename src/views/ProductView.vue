<script setup lang="ts">
  import BreadCrumbs from "@/components/product-page/BreadCrumbs.vue"
  import ImageCarousel from "@/components/product-page/ImageCarousel.vue"
  import useProducts from "@/composables/api/useProducts"
  import type { Product } from "@/types/products"

  import { ref, watch } from "vue"

  const products = useProducts(ref("5xrTeyd2d9FCIaXdqU09"))
  const product = ref<Product | undefined>()
  watch(products.areProductsLoading, () => {
    product.value = products.products.value[0]
    console.log(product)
  })
</script>

<template>
  <BreadCrumbs :product-name="product.name" v-if="product" />
  <div class="grid grid-cols-2 gap-10" v-if="product">
    <div>
      <ImageCarousel :images="product.images" class="w-full" />
      <button
        class="bg-primary block text-white px-2 py-1 rounded-md ml-auto mt-5 drop-shadow-xl">
        Add to Cart
      </button>
    </div>
    <div>
      <div class="flex justify-between">
        <h1 class="text-4xl">{{ product.name }}</h1>
        <h1 class="text-4xl">${{ product.price.toFixed(2) }}</h1>
      </div>
      <section class="mt-10">
        <h2 class="text-2xl">Product Description:</h2>
        <p class="mt-5">
          {{ product.description }}
        </p>
      </section>
      <section class="mt-10">
        <h2 class="text-2xl">Specs:</h2>
        <ul class="mt-5 list-disc">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            aut
          </li>
          <li>
            Consequuntur cumque dolore dolores ea est modi natus, necessitatibus
          </li>
          <li>
            Officiis quas quos repellat sequi sit tenetur. Amet eveniet fugit
          </li>
          <li>
            Sint soluta veritatis? Ad culpa eos iure molestiae, natus quos sint!
          </li>
        </ul>
      </section>
      <section class="mt-10">
        <h2 class="text-2xl">Perks:</h2>
        <ul class="mt-5 list-disc">
          <li v-for="(perkValue, perkKey) in product.perks" :key="perkKey">
            {{ perkKey[0].toUpperCase() + perkKey.slice(1) }} :
            {{
              perkValue.toString()[0].toUpperCase() +
              perkValue.toString().slice(1)
            }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  :global(main) {
    @apply p-5;
  }
</style>
