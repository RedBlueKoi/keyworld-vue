import type { Category } from "@/types/products"
import { getSlug } from "@/utils"
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import useCategories from "./useCategories"

const useCategory = () => {
  const { params } = useRoute()
  const categoryName = params.categoryName as string
  const { categories, areCategoriesLoading } = useCategories()
  const category = ref<Category>()
  const isCategoryLoading = ref(true)

  const fetch = () => {
    category.value = categories.value.find(
      (item) => getSlug(item.name) === categoryName
    )
    isCategoryLoading.value = false
  }

  watch([areCategoriesLoading], () => {
    if (areCategoriesLoading.value) return
    if (!categoryName || !categoryName.trim().length) {
      isCategoryLoading.value = false
      return
    }
    fetch()
  })

  return { category, isCategoryLoading }
}

export default useCategory
