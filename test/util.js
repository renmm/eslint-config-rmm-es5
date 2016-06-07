/**
 * @fileOverview  test工具包
 * @author 妙才<renmaomin@126.com>
 */

var fs = require('fs');
var path = require('path');

/**
 * 读取源代码
 * @param  {string} fileName 文件名
 * @param  {Function} doFunc   回调处理函数
 * @return {string} 源文件
 */
var readSourceCode = function readSourceCode(fileName) {
  return fs.readFileSync(path.join(__dirname, 'data', fileName + '.js'), 'UTF-8');
};

/**
 * 获取规则对象
 * @param  {Object} rules    包含很多规则的对象
 * @param  {string} ruleName 规则名称
 * @return {Object}          类似{rules:{ 'indent': 2}}
 */
var getRule = function getRule(rules, ruleName) {
  var rule = { 'rules': { } };

  if (!rules[ruleName]) {
    return {};
  }
  rule.rules[ruleName] = rules[ruleName];

  return rule;
};

module.exports = {
  readSourceCode: readSourceCode,
  getRule: getRule
};
