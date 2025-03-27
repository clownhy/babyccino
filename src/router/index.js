// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomePage.vue';
import PlayAreaView from '../views/PlayArea.vue';
import EatDrinkView from '../views/EatDrink.vue';
import PartiesView from '../views/PartiesPage.vue';

Vue.use(VueRouter);

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

const router = new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production' ? '/babyccino/' : '/',
  routes,
});

export default router;
