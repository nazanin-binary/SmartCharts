'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _filterTree = require('./filterTree');

var _filterTree2 = _interopRequireDefault(_filterTree);

var _isExpressionStatement = require('./isExpressionStatement');

var _isExpressionStatement2 = _interopRequireDefault(_isExpressionStatement);

var _isJSXExpression = require('./isJSXExpression');

var _isJSXExpression2 = _interopRequireDefault(_isJSXExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _filterTree2.default)(function (node) {
  return (0, _ramda.or)((0, _isExpressionStatement2.default)(node), (0, _isJSXExpression2.default)(node));
});