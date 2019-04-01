import {expect} from 'chai';
import mapExpression from 'src/mapExpression';

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

describe('mapExpression', () => {
  it('maps an Expression Statement object', () => {
    expect(mapExpression(node).type).to.be.equal('CallExpression');
  });

  it('returns undefined if not an Expression Statement', () => {
    expect(mapExpression({notAnExpression: null})).to.be.equal(undefined)
  });
});
