import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ProductView from '../components/Product/ProductView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: Home },
      { path: '/products/:id', component: ProductView }
  ]
});

export default router;
