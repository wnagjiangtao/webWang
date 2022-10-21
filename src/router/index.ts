import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: ()=>import("@/layout/index.vue"),
      path: '/',
      children: []
    }
  ]
})

export default router
