module.exports = {
  'rules': {
    // 禁止在正则表达式中使用控制字符
    // http://eslint.cn/docs/rules/no-control-regex
    'no-control-regex': 2,

    // 禁止RegExp构造函数中无效的正则表达式字符串
    // http://eslint.cn/docs/rules/no-invalid-regexp
    // REVIEW: 需要验证，再确定是否开启
    'no-invalid-regexp': 2,

    // 禁止在正则表达式字面量中使用多个空格
    // http://eslint.cn/docs/rules/no-regex-spaces
    'no-regex-spaces': 2,

    // 禁止除法操作符显式的出现在正则表达式开始的位置
    // http://eslint.cn/docs/rules/no-div-regex
    'no-div-regex': 2,

    // 禁止在正则表达式中使用空字符集
    // http://eslint.cn/docs/rules/no-empty-character-class
    'no-empty-character-class': 2,

    // 要求正则表达式被括号括起来
    // http://eslint.cn/docs/rules/wrap-regex
    'wrap-regex': 0
  }
};
