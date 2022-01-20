import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import carousel from 'vue-owl-carousel';
import './customjs/scr'
import store from './store'
import vSelect from "vue-select";
import * as yup from "yup";
import Datepicker from 'vuejs-datepicker';


Vue.use(BootstrapVue);
Vue.use(carousel);
Vue.use(vSelect);
Vue.use(Datepicker);
Vue.use(yup);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
    libraries: 'places',
  },
})

import "animate.css"
import "vue-select/src/scss/vue-select.scss";
import "./assets/scss/app.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')