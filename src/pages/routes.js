import {createRouter} from 'vue-router'
import Homepage from './Home.vue';
import ChargingStations from './ChargingStations.vue';
import Price from './Price.vue';
import Investment from './Investment.vue';
import AutoPark from './AutoPark.vue';
import DashboardHome from './DashboardHome.vue'

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/charging-stations/',
    component: ChargingStations
  },

  {
    path: '/pricing/',
    component: Price
  },

  {
    path: '/business/investors/',
    component: Investment
  },

  {
    path: '/business/fleet-owners/',
    component: AutoPark
  },

  {
    path: '/dashboard',
    component: DashboardHome
  }
]
export default function(history) {
  const router = createRouter({
    history: history,
    routes
  });

  router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
  });

  return router;
}