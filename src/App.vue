<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import CardView from './components/Card/CardView.vue';
import ProductView from './components/Product/ProductView.vue';

const routes = [
  { path: '/', component: CardView },
  { path: '/products/:id', component: ProductView }
];
</script>

<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>



