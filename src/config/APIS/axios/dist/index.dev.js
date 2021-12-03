"use strict";

var _interopRequireDefault = require("/Users/miltinco/Sites/TranspoCredit/transpocredit-frontend/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

var _axios = _interopRequireDefault(require("../../../axios"));

_axios.default.interceptors.response.use(function (response) {
  if (response.status == 200 || response.state == 201) {
    localStorage.setItem('timestamp', new Date.now());
  }

  return response;
}, function (err) {
  if (err.response.status === 400) {
    return err;
  } else {
    return Promise.reject(err);
  }
});

var _default = _axios.default;
exports.default = _default;