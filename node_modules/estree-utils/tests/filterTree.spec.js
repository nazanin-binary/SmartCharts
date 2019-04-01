import {expect} from 'chai';
import {compose, equals, all, prop} from 'ramda';
import filterTree from 'src/filterTree';
import AST from 'assets/ast-small-example';

describe('filterTree', () => {

  let output = filterTree((node) => (
    node.type === 'VariableDeclaration'
  ))(AST.body);

  it('returns a collection', () => {
    expect(Array.isArray(output)).to.be.true;
  });

  it('returns all nodes that meet the condition', () => {

    const isVariableDeclaration = compose(
      equals('VariableDeclaration'),
      prop('type')
    );

    const areAllVariableDeclarations = all(isVariableDeclaration)

    expect(areAllVariableDeclarations(output)).to.be.true
    expect(output.length).to.be.equal(3)
  });

  it('returns an empty collection if no node types are matched', () => {

    let output = filterTree((node) => (
      node.type === 'NonExistentType'
    ))(AST.body);

    expect(output.length).to.be.equal(0)
  });
});
