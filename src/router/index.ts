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
      path: "/category/:categoryName",
      name: "category",
      component: () => import("@/views/CategoryView.vue")
    },
    {
      path: "/category/:categoryName/:productId",
      name: "product",
      component: () => import("@/views/ProductView.vue")
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
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue")
    }
  ]
})

export default router
