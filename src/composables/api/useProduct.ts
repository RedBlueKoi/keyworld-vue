import type { Product } from "@/types/products"
import { onMounted, ref } from "vue"

const useProduct = (productId: string) => {
  const product = ref<Product | null>(null)
  const isProductLoading = ref(true)

  const fetchProduct = async () => {
    console.log(productId)
  }

  onMounted(async () => {
    await fetchProduct()
    isProductLoading.value = false
  })

  return { product, isProductLoading }
}

export default useProduct
