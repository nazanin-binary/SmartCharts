import {expect} from 'chai';
import isMethodNamed from 'src/isMethodNamed';

// An Expression Statement
var node = {
  "type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "computed": false,
    "object": {
      "type": "Identifier",
      "name": "util"
    },
    "property": {
      "type": "Identifier",
      "name": "hello"
    }
  }
}

describe('isMethodNamed', () => {
  it('returns true if node has a method named like the argument', () => {
    expect(isMethodNamed('hello')(node)).to.be.true;
  });

  it('returns false if node does not have a method named like the argument', () => {
    expect(isMethodNamed('bye')(node)).to.be.false;
  });
});
