// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';
import PlayAreaView from '../views/PlayArea.vue';
import EatDrinkView from '../views/EatDrink.vue';
import PartiesView from '../views/PartiesPage.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
