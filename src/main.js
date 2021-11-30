import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { BootstrapVue } from 'bootstrap-vue'
import carousel from 'vue-owl-carousel'

Vue.use(BootstrapVue);
Vue.use(carousel);

import "animate.css"
import "./assets/scss/app.scss";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')