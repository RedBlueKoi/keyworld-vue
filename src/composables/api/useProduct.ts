import type { Product } from "@/types/products"
import { getSlug } from "@/utils"
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import useCategory from "./useCategory"
import useProducts from "./useProducts"

const useProduct = () => {
  const product = ref<Product>()
  const isProductLoading = ref(true)
  const { params } = useRoute()
  const productName = params.productName as string
  const { category, isCategoryLoading } = useCategory()
  const { products, areProductsLoading } = useProducts()

  const fetchProduct = async () => {
    if (!productName) return
    product.value = products.value.find(
      (item) => getSlug(item.name) === productName
    )
    isProductLoading.value = false
  }

  watch([isCategoryLoading, areProductsLoading], () => {
    if (isCategoryLoading.value || areProductsLoading.value) return
    if (!category.value || !productName || !productName.trim().length) {
      isProductLoading.value = false
      return
    }
    void fetchProduct()
  })

  return { product, isProductLoading }
}

export default useProduct
