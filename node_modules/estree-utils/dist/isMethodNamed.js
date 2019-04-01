'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _isMemberExpression = require('./isMemberExpression');

var _isMemberExpression2 = _interopRequireDefault(_isMemberExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMethodNamed = function isMethodNamed() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var methodName = (0, _ramda.compose)((0, _ramda.prop)('name'), (0, _ramda.prop)('property'));
  var matchesArgs = function matchesArgs(name) {
    return (0, _ramda.any)((0, _ramda.equals)(name))(args);
  };

  return (0, _ramda.compose)((0, _ramda.ifElse)(_isMemberExpression2.default, (0, _ramda.compose)(matchesArgs, methodName), _ramda.F), (0, _ramda.prop)('callee'));
};

exports.default = (0, _ramda.curry)(isMethodNamed);