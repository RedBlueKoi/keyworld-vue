import { onMounted, ref, watch, type Ref } from "vue"
import {
  collection,
  CollectionReference,
  doc,
  getDocs,
  query,
  where
} from "firebase/firestore"
import db from "./firebase"
import type { Product } from "@/types/products"

const useProducts = (categoryId: Ref<string | null>) => {
  const products = ref<Product[]>([])
  const areProductsLoading = ref<boolean>(true)

  const getAll = async (
    collectionRef: CollectionReference
  ): Promise<Product[]> => {
    const response = await getDocs(collectionRef)
    return response.docs.map((item) => item.data() as Product)
  }

  const getFiltered = async (
    collectionRef: CollectionReference
  ): Promise<Product[]> => {
    if (!categoryId.value) return []
    const categoriesCol = collection(db, "categories")
    const categoryRef = doc(categoriesCol, categoryId.value)
    const q = query(collectionRef, where("category", "==", categoryRef))
    const response = await getDocs(q)
    return response.docs.map((item) => item.data() as Product)
  }

  const refresh = async () => {
    try {
      const productsCol = collection(db, "products")
      products.value = categoryId.value
        ? await getFiltered(productsCol)
        : await getAll(productsCol)
    } catch (error) {
      console.error(error)
    }
    areProductsLoading.value = false
  }

  onMounted(() => {
    void refresh()
  })

  watch([categoryId], () => {
    void refresh()
  })

  return { products, areProductsLoading }
}

export default useProducts
