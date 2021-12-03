"use strict";

var _interopRequireDefault = require("/Users/miltinco/Sites/TranspoCredit/transpocredit-frontend/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var APP_DOMAIN = "";
var baseURL = "";

if (process.env.NODE_ENV === 'production') {
  baseURL = "";
}

var _default = _axios.default.create({
  APP_DOMAIN: APP_DOMAIN,
  baseURL: baseURL
});

exports.default = _default;