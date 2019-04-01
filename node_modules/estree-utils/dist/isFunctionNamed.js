'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var isFunction = function isFunction() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var notString = function notString(name) {
    return typeof name !== 'string';
  };
  var functionName = (0, _ramda.compose)((0, _ramda.prop)('name'), (0, _ramda.prop)('callee'));
  var matchesArgs = function matchesArgs(name) {
    return (0, _ramda.any)((0, _ramda.equals)(name))(args);
  };

  if ((0, _ramda.any)(notString)(args)) {
    throw new Error('arguments must be strings');
  }

  return (0, _ramda.ifElse)((0, _ramda.has)('callee'), (0, _ramda.compose)(matchesArgs, functionName), _ramda.F);
};

exports.default = (0, _ramda.curry)(isFunction);