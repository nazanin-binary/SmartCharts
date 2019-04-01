'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isMethodNamed = require('./isMethodNamed');

var _isMethodNamed2 = _interopRequireDefault(_isMethodNamed);

var _isFunctionNamed = require('./isFunctionNamed');

var _isFunctionNamed2 = _interopRequireDefault(_isFunctionNamed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMethodOrFunctionNamed = function isMethodOrFunctionNamed() {
  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return function (node) {
    return _isMethodNamed2.default.apply(undefined, names)(node) || _isFunctionNamed2.default.apply(undefined, names)(node);
  };
};

exports.default = isMethodOrFunctionNamed;