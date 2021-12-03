"use strict";

var _interopRequireDefault = require("/Users/miltinco/Sites/TranspoCredit/transpocredit-frontend/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _state = _interopRequireDefault(require("./state"));

// import getters from './getters';
// import actions from './actions';
// import mutations from './mutations';
_vue.default.use(_vuex.default);

var _default = new _vuex.default.Store({
  // getters,
  // actions,
  // mutations,
  state: _state.default // modules: {},
  // strict: process.env.NODE_ENV !== 'production',

});

exports.default = _default;