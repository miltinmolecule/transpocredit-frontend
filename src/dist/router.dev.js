"use strict";

var _interopRequireDefault = require("/Users/miltinco/Sites/TranspoCredit/transpocredit-frontend/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

var _interopRequireWildcard2 = _interopRequireDefault(require("/Users/miltinco/Sites/TranspoCredit/transpocredit-frontend/node_modules/@babel/runtime/helpers/esm/interopRequireWildcard"));

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

_vue.default.use(_vueRouter.default);

console.log('');

var MainLayoutView = function MainLayoutView() {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('./layouts/MainLayout.vue'));
  });
};

var ProcessLayoutView = function ProcessLayoutView() {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('./layouts/VehicleProcess.vue'));
  });
};

var routes = [{
  path: '',
  component: MainLayoutView,
  children: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('./views/main/Home'));
      });
    }
  }]
}, {
  path: '',
  component: ProcessLayoutView,
  children: [{
    path: '/get-vehicle',
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('./views/main/GetVehicle'));
      });
    }
  }]
}];
var router = new _vueRouter.default({
  mode: 'history',
  routes: routes
});
var _default = router;
exports.default = _default;