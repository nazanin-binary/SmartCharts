import {expect} from 'chai';
import traverse from 'src/traverse';
import AST from 'assets/ast-mini-example';

describe('traverse', () => {
  it('visits every node with a semantic type', () => {
    let visited = 0
    traverse((node) => visited++, AST.body);
    expect(visited).to.be.equal(8);
  });

  it('applies an iterator to every visited node', () => {
    let accum = []
    traverse((node) => accum.push(node.type), AST.body);

    const types = [
      "VariableDeclaration",
      "VariableDeclarator",
      "Identifier",
      "Literal",
      "VariableDeclaration",
      "VariableDeclarator",
      "Identifier",
      "Literal"
    ]

    expect(accum).to.be.deep.equal(types);
  });
});
