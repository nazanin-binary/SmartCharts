'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var traverse = function traverse(visitor, object) {
  var key, child;
  if (!Array.isArray(object)) {
    visitor.call(null, object);
  }
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      child = object[key];
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && child !== null && !child.start && typeof child[0] !== 'number') {
        traverse(visitor, child);
      }
    }
  }
};

exports.default = (0, _ramda.curry)(traverse);