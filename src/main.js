import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import carousel from 'vue-owl-carousel';
import './customjs/scr'
import store from './config/store'

Vue.use(BootstrapVue);
Vue.use(carousel);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
    libraries: 'places',
  },
})

import "animate.css"
import "./assets/scss/app.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')