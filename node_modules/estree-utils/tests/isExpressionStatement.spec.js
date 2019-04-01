import {expect} from 'chai';
import isExpressionStatement from 'src/isExpressionStatement';

var node = {
  "type": "ExpressionStatement",
  "expression": {
    "type": "CallExpression",
    "callee": {
      "type": "MemberExpression",
      "computed": false,
      "object": {
        "type": "Identifier",
        "name": "util"
      }
    }
  }
}

describe('isExpressionStatement', () => {
  it('returns true if node is an Expression Statement', () => {
    expect(isExpressionStatement(node)).to.be.true;
  });
});
