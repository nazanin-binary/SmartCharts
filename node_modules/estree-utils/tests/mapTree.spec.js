import {expect} from 'chai';
import mapTree from 'src/mapTree';
import AST from 'assets/ast-small-example';

describe('mapTree', () => {

  const output = mapTree((node) => node.type, AST.body);

  it('returns a collection', () => {
    expect(Array.isArray(output)).to.be.true;
  });

  it('applies an iterator to each node and adds to collection', () => {
    expect(output.length).to.be.equal(83);
  });

  it('does not add undefined or null to the output collection', () => {

  });
});
