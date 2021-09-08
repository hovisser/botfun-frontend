import Settings from '@/components/pages/settings/settings';
import Spread from '@/components/pages/spread/spread';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Page from '../components/page';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Page,
    children:[{
      path: '/spread',
      name: 'Spread',
      component: Spread,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },]
  },
  /*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue'),
  }, */
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
