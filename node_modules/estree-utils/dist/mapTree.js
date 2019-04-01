'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _traverse = require('./traverse');

var _traverse2 = _interopRequireDefault(_traverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapTree = function mapTree(iterator, object) {
  var collection = [];

  var map = (0, _traverse2.default)(function (node) {
    var mapped = iterator(node);
    if (mapped !== null && mapped !== undefined) {
      collection.push(mapped);
    }
  });

  map(object);
  return collection;
};

exports.default = (0, _ramda.curry)(mapTree);