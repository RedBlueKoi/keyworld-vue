import type { Category } from "@/types/products"
import { collection, getDocs } from "firebase/firestore"
import { onMounted, ref } from "vue"
import db from "./firebase"

const useCategories = () => {
  const categories = ref<Category[]>([])
  const areCategoriesLoading = ref<boolean>(true)

  const onInit = async () => {
    try {
      const categoriesCol = collection(db, "categories")
      const response = await getDocs(categoriesCol)
      categories.value = response.docs.map((doc) => doc.data() as Category)
    } catch (error) {
      console.error(error)
    }
    areCategoriesLoading.value = false
  }

  onMounted(() => {
    void onInit()
  })

  return { categories, areCategoriesLoading }
}

export default useCategories
