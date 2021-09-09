
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/components/page';
import Spread from '@/components/pages/account/spread/spread';
import Info from '@/components/pages/account/info/info';
import Settings from '@/components/pages/settings/settings';
import Connection from '@/components/pages/connection/connection';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/spread',
        name: 'Spread',
        component: Spread,
      },
      {
        path: '/info',
        name: 'Info',
        component: Info,
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
      },
      {
        path: '/connection',
        name: 'Connection',
        component: Connection,
      },
    ]
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
