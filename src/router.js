import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

console.log('');

const MainLayoutView = () => import('./layouts/MainLayout.vue');
const ProcessLayoutView = () => import('./layouts/VehicleProcess.vue');

const routes = [
  {
    path: '',
    component: MainLayoutView,
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import('./views/main/Home'),
      }
    ]
  },
  {
    path: '',
    component: ProcessLayoutView,
    children: [
      {
        path: '/get-vehicle',
        component: () => import('./views/main/GetVehicle'),
      },
      {
        path: '/success-page',
        component: () => import('./views/main/SuccessPage'),
      },
      {
        path: '/payment-plan',
        component: () => import('./views/main/PaymentPlan'),
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
