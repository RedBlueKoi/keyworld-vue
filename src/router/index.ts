import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/CheckoutView.vue")
    },
    {
      path: "/success",
      name: "success",
      component: () => import("@/views/SuccessView.vue")
    },
    {
      path: "/404",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue")
    },
    {
      path: "/:categoryName/:productId",
      name: "product",
      component: () => import("@/views/ProductView.vue")
    },
    {
      path: "/:categoryName",
      name: "category",
      component: () => import("@/views/CategoryView.vue")
    }
  ]
})

export default router
