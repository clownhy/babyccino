// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';
import PlayAreaView from '../views/PlayArea.vue';
import EatDrinkView from '../views/EatDrink.vue';
import PartiesView from '../views/PartiesPage.vue';
import PricingView from '../views/PricingPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/play-area',
    name: 'PlayAreaView',
    component: PlayAreaView,
  },
  {
    path: '/eat-drink',
    name: 'EatDrinkView',
    component: EatDrinkView,
  },
  {
    path: '/parties',
    name: 'PartiesView',
    component: PartiesView,
  },
  {
    path: '/pricing',
    name: 'PricingView',
    component: PricingView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
