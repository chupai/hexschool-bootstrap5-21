import { createRouter, createWebHistory } from 'vue-router';
import Product from '@/views/product/Product.vue';

const routes = [
  {
    path: '/',
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory('/hexschool-bootstrap5-21/'),
  routes,
});

export default router;
