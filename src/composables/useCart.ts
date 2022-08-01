import { ref } from "vue"

export interface Cart {
  total: number
}

const cart = ref<Cart>()

const useCart = () => {
  const addProduct = () => {
    console.log(
      "I wanted to be a cool method but developer was too lazy to finish me"
    )
  }
  const removeProduct = () => {
    console.log(
      "I wanted to be a cool method but developer was too lazy to finish me"
    )
  }

  return { cart, addProduct, removeProduct }
}

export default useCart
