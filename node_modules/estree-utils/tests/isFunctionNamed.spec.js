import {expect} from 'chai';
import isFunctionNamed from 'src/isFunctionNamed';

 const node = {
  "type": "CallExpression",
  "callee": {
    "type": "Identifier",
    "name": "add"
  }
}

describe('isFunctionNamed', () => {
  it('returns true if function node has the same name as the argument', () => {
    const isAddFunction = isFunctionNamed('add');
    expect(isAddFunction(node)).to.be.true;
  });

  it('return false if function not does not have the same name as argument', () => {
    const isMinusFunction = isFunctionNamed('minus');
    expect(isMinusFunction(node)).to.be.false;
  });

  it('throws an error if the argument is not a string', () => {
    expect(() => isFunctionNamed(this)).to.throw(Error)
  });

  it('can take multiple name arguments', () => {
    const isMathFunction = isFunctionNamed('multiply', 'minus', 'divide', 'add');
    expect(isMathFunction(node)).to.be.true;
  });
});
