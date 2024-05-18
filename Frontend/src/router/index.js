// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Historical from '@/views/Historical.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/historical',
    name: 'Historical',
    component: Historical,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
