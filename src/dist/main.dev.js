"use strict";

var _interopRequireWildcard = require("/Users/miltinco/Sites/TranspoCredit/transpocredit-frontend/node_modules/@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("/Users/miltinco/Sites/TranspoCredit/transpocredit-frontend/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _bootstrapVue = require("bootstrap-vue");

var VueGoogleMaps = _interopRequireWildcard(require("vue2-google-maps"));

var _vueOwlCarousel = _interopRequireDefault(require("vue-owl-carousel"));

require("./customjs/scr");

var _store = _interopRequireDefault(require("./config/store"));

require("animate.css");

require("./assets/scss/app.scss");

_vue.default.use(_bootstrapVue.BootstrapVue);

_vue.default.use(_vueOwlCarousel.default);

_vue.default.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
    libraries: 'places'
  }
});

_vue.default.config.productionTip = false;
new _vue.default({
  router: _router.default,
  store: _store.default,
  render: function render(h) {
    return h(_App.default);
  }
}).$mount('#app');