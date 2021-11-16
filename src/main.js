import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue);


import "animate.css"
import "./assets/scss/app.scss";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')