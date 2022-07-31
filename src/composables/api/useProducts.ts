import { ref, watch } from "vue"
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import db from "./firebase"
import type { Product } from "@/types/products"
import useCategory from "./useCategory"

const useProducts = () => {
  const products = ref<Product[]>([])
  const areProductsLoading = ref<boolean>(true)
  const { category, isCategoryLoading } = useCategory()

  const fetchProducts = async () => {
    if (!category.value) return
    const productsCollection = collection(db, "products")
    const categoryRef = doc(db, `/categories/${category.value.id}`)
    const q = query(productsCollection, where("category", "==", categoryRef))
    const response = await getDocs(q)
    products.value = response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      } as Product
    })
    areProductsLoading.value = false
  }

  watch([category, isCategoryLoading], () => {
    if (isCategoryLoading.value) return
    if (!category.value) return
    void fetchProducts()
  })

  return { products, areProductsLoading, fetchProducts }
}

export default useProducts
