import {expect} from 'chai';
import {all, filter} from 'ramda';
import filterTreeForFunctionsNamed from 'src/filterTreeForFunctionsNamed';
import isFunctionNamed from 'src/isFunctionNamed';
import ASTJX from 'assets/ast-example';
import ASTJS from 'assets/ast-small-example';

describe('filterTreeForFunctionsNamed', () => {
  it('returns a collection of all functions in a tree named the same as the argument', () => {

    const getAllGettextFunctions = filterTreeForFunctionsNamed('__');
    const allGettextFunctions = getAllGettextFunctions(ASTJX.body);

    const getAllAddFunctions = filterTreeForFunctionsNamed('add');
    const allAddFunctions = getAllAddFunctions(ASTJS.body);

    expect(all(isFunctionNamed('__'))(allGettextFunctions)).to.be.true;
    expect(allGettextFunctions.length).to.be.equal(2);
    expect(all(isFunctionNamed('add'))(allAddFunctions)).to.be.true;
    expect(allAddFunctions.length).to.be.equal(3);
  });
});
