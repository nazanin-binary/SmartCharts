import {expect} from 'chai';
import isJSXExpression from 'src/isJSXExpression';

var node = {
  "type": "JSXExpressionContainer",
  "expression": {
    "type": "MemberExpression",
    "computed": false
  }
}

describe('isJSXExpression', () => {
  it('returns true if node is a JSX Expression Container', () => {
    expect(isJSXExpression(node)).to.be.true;
  });
});
