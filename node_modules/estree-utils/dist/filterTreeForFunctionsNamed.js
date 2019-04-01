'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _filterTreeForCallExpressions = require('./filterTreeForCallExpressions');

var _filterTreeForCallExpressions2 = _interopRequireDefault(_filterTreeForCallExpressions);

var _isFunctionNamed = require('./isFunctionNamed');

var _isFunctionNamed2 = _interopRequireDefault(_isFunctionNamed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterTreeForFunctionsNamed = function filterTreeForFunctionsNamed() {
  return (0, _ramda.compose)((0, _ramda.filter)(_isFunctionNamed2.default.apply(undefined, arguments)), _filterTreeForCallExpressions2.default);
};

exports.default = (0, _ramda.curry)(filterTreeForFunctionsNamed);