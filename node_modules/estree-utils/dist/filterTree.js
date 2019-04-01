'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _mapTree = require('./mapTree');

var _mapTree2 = _interopRequireDefault(_mapTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterTree = function filterTree(condition, tree) {

  var filter = (0, _mapTree2.default)(function (node) {
    if (condition(node)) {
      return node;
    }
  });

  return filter(tree);
};

exports.default = (0, _ramda.curry)(filterTree);