module.exports = {
  'rules': {
    // 不允许 catch 子句的参数名与外层作用域中的变量同名
    // http://eslint.cn/docs/rules/no-catch-shadow
    'no-catch-shadow': 2,

    // 要求对象字面量属性名称用引号括起来
    // http://eslint.cn/docs/rules/quote-props
    'quote-props': [2, 'always'],

    // 禁止或强化末尾逗号
    // http://eslint.cn/docs/rules/comma-dangle
    'comma-dangle': [2, 'never'],
  }
};
