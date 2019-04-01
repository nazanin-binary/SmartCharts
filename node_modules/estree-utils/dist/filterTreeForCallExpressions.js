'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filterTree = require('./filterTree');

var _filterTree2 = _interopRequireDefault(_filterTree);

var _isCallExpression = require('./isCallExpression');

var _isCallExpression2 = _interopRequireDefault(_isCallExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _filterTree2.default)(_isCallExpression2.default);