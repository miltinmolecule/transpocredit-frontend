"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var userLoc = JSON.parse(localStorage.getItem("trcppy")) || {};

var getData = function getData() {
  return userLoc;
};

var state = {
  user: {},
  AppUser: getData()
};
var _default = state;
exports.default = _default;