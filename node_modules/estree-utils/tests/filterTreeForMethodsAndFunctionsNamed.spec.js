import {expect} from 'chai';
import {all, filter} from 'ramda';
import filterTreeForMethodsAndFunctionsNamed from 'src/filterTreeForMethodsAndFunctionsNamed';
import isMethodOrFunctionNamed from 'src/isMethodOrFunctionNamed';
import mixAST from 'assets/ast-mix-example';
import ASTJX from 'assets/ast-example';
import ASTJS from 'assets/ast-small-example';

describe('filterTreeForMethodsAndFunctionsNamed', () => {
  it('returns a collection of all named methods and functions in a tree', () => {

    let getAllGettext = filterTreeForMethodsAndFunctionsNamed('__');
    let allGettext = getAllGettext(ASTJX.body);

    const getAllHello = filterTreeForMethodsAndFunctionsNamed('hello');
    const allHello = getAllHello(ASTJS.body);

    expect(all(isMethodOrFunctionNamed('__'))(allGettext)).to.be.true;
    expect(allGettext.length).to.be.equal(2);
    expect(all(isMethodOrFunctionNamed('hello'))(allHello)).to.be.true;
    expect(allHello.length).to.be.equal(1);
  });

  it('can take multiple name arguments', () => {
    const names = ['__', 'translate', 'translateMethod'];
    let getAllGettext = filterTreeForMethodsAndFunctionsNamed(...names);
    let allGettext = getAllGettext(mixAST.body);
    const isi18n = isMethodOrFunctionNamed('__')
    const alli18n = filter(isi18n)(allGettext);

    expect(alli18n.length).to.be.equal(3)
    expect(all(isMethodOrFunctionNamed(...names))(allGettext)).to.be.true;
    expect(allGettext.length).to.be.equal(6);
  });
});
