import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import moduleVehicle from './vehicle/moduleVehicle'
import moduleGetVehicle from './getVehicle/moduleGetVehicle'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  modules: {
    vehicle: moduleVehicle,
    getVehicle: moduleGetVehicle
  },
  strict: process.env.NODE_ENV !== 'production',
})