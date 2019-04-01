import {expect} from 'chai';
import isMethodOrFunctionNamed from 'src/isMethodOrFunctionNamed';

const isAdd = isMethodOrFunctionNamed('add');

describe('isMethodOrFunctionNamed', () => {

  it('returns true if method is named the same as the argument', () => {
    let node = {
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
          "name": "add"
        }
      }
    }

    expect(isAdd(node)).to.be.true
  });

  it('returns true if function is named the same as the argument', () => {
    let node = {
      "type": "CallExpression",
      "callee": {
        "type": "Identifier",
        "name": "add"
      }
    }

    expect(isAdd(node)).to.be.true
  });

  it('returns false if method is not named the same as the argument', () => {
    let node = {
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
          "name": "minus"
        }
      }
    }

    expect(isAdd(node)).to.be.false
  });
  
  it('returns false if function is not named the same as the argument', () => {
    let node = {
      "type": "CallExpression",
      "callee": {
        "type": "Identifier",
        "name": "minus"
      }
    }

    expect(isAdd(node)).to.be.false
  });
})
