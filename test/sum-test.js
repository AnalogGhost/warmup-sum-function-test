const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should add numbers properly', function() {
      assert.equal(sum(1),1);
      assert.equal(sum(1,2),3);
      assert.equal(sum(-1,1),0);
      assert.equal(sum(0.5,0.5),1);
    });

    it('Should throw an egarror if any argument is not a number',function(){
      assert.throws(function() { sum('a','b' );},Error);
      assert.throws(function() { sum(undefined,undefined); },Error);
      assert.throws(function() { sum(1,[],{}); },Error);
      assert.throws(function() { sum(1,1,[]); } ,Error);
    });
});
