import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import {SignInComponent} from './user';
import ChargingStations from './charging-stations/ChargingStations.vue';
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
    path: '/sign-in/',
    component: SignInComponent
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}