/**
 * @fileOverview rules/array.js的规格
 * @author 妙才<renmaomin@126.com>
 */

var expect = require('chai').expect;
var linter = require('eslint').linter;

var arrayRules = require('../../rules/array').rules;
var util = require('../util');


describe('数组规格测试', function arrayTest() {
  it('强制数组方法的回调函数中有 return 语句', function () {
    var rule = util.getRule(arrayRules, 'array-callback-return');
    var invalidMessages = linter.verify(util.readSourceCode('array-return-invalid'), rule);
    var validMessages = linter.verify(util.readSourceCode('array-return-valid'), rule);

    expect(invalidMessages[0].message).to.equal('Expected to return a value in this function.');
    expect(validMessages).to.be.empty;
  });

  it('禁用稀疏数组', function () {
    var rule = util.getRule(arrayRules, 'no-sparse-arrays');
    var invalidMessages = linter.verify(util.readSourceCode('array-sparse-invalid'), rule);
    var validMessages = linter.verify(util.readSourceCode('array-sparse-valid'), rule);

    expect(invalidMessages[0].message).to.equal('Unexpected comma in middle of array.');
    expect(validMessages).to.be.empty;
  });
});
