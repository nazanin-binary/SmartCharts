import {expect} from 'chai';
import {all, concat} from 'ramda';
import filterTreeForCallExpressions from 'src/filterTreeForCallExpressions';
import filterTreeForFunctionsNamed from 'src/filterTreeForFunctionsNamed';
import isCallExpression from 'src/isCallExpression';
import ASTJSX from 'assets/ast-example';
import ASTJS from 'assets/ast-small-example';

describe('filterTreeForCallExpressions', () => {
  const output = concat(
    filterTreeForCallExpressions(ASTJS),
    filterTreeForCallExpressions(ASTJSX)
  );

  it('returns a collection of all call expressions', () => {
    expect(Array.isArray(output)).to.be.true;
    expect(all(isCallExpression)(output)).to.be.true;
  });

  it('returns all call expressions in a tree', () => {
    expect(output.length).to.be.equal(8)
  });
});
