import type { Category } from "@/types/products"
import { collection, getDocs, query, where } from "firebase/firestore"
import { onMounted, ref } from "vue"
import db from "./firebase"

const categories = ref<Category[]>([])

const useCategories = () => {
  const areCategoriesLoading = ref<boolean>(true)

  const fetchCategories = async () => {
    try {
      const categoriesCol = collection(db, "categories")
      const q = query(categoriesCol, where("isDisabled", "!=", true))
      const response = await getDocs(q)
      categories.value = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        } as Category
      })
    } catch (error) {
      console.error(error)
    }
    areCategoriesLoading.value = false
  }

  onMounted(() => {
    if (categories.value.length) {
      areCategoriesLoading.value = false
      return
    }
    void fetchCategories()
  })

  return { categories, areCategoriesLoading, fetchCategories }
}

export default useCategories
