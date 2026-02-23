import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '../views/ProductCatalog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductCatalog,
    },
    {
      path: '/schema',
      name: 'schema',
      component: () => import('../views/ComparisonView.vue'),
    },
  ],
})

export default router
