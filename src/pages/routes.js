import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import ChargingStations from './charging-stations/ChargingStations.vue';
import Price from './price/Price.vue';
import Investment from './investment/Investment.vue';

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
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}