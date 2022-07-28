<template>
  <div>
    <div
      class="max-w-sm bg-white rounded-sm border border-gray-200 shadow-md dark:bg-gray-300 dark:border-gray-700">
      <div class="h-20 bg-[#34495E] w-full">
        <div class="flex flex-row">
          <div class="flex-1 text-white pt-4 pl-2">Your Cart</div>
          <div class="flex-1 text-white text-right pr-2 pt-6">$1234.74</div>
          <div class="absolute text-white text-xs pt-10 pl-2">X Items</div>
        </div>
      </div>
      <div class="p-5">
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li
              v-for="(product, index) in products"
              :key="index"
              class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0"></div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-medium text-gray-900">
                    {{ product.description }}
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900">
                  {{ product.price }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex justify-center">
          <a
            href="#"
            class="inline-flex items-center mt-4 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-[#34495E] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Checkout
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export interface Product {
    description: string
    price: string
  }

  export default {
    name: "CartPreview",
    data() {
      return {
        products: [
          {
            description:
              "Some Item with very long name which obviously not gonna fit here and needs to be truncated",
            price: "$320.21"
          },
          {
            description:
              "Some Item with very long name which obviously not gonna fit here and needs to be truncated",
            price: "$285.09"
          },
          {
            description:
              "Some Item with very long name which obviously not gonna fit here and needs to be truncated",
            price: "$212.48"
          },
          {
            description:
              "Some Item with very long name which obviously not gonna fit here and needs to be truncated",
            price: "$156.76"
          }
        ] as Product[]
      }
    }
  }
</script>
