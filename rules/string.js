module.exports = {
  'rules': {
    // 禁止不必要的字符串字面量或模板字面量的连接
    // http://eslint.cn/docs/rules/no-useless-concat
    'no-useless-concat': 2,

    // 禁止使用多行字符串
    // http://eslint.cn/docs/rules/no-multi-str
    'no-multi-str': 2,

    // 禁止在字符串中使用八进制转义序列，比如 var foo = "Copyright \251";
    // http://eslint.cn/docs/rules/no-octal-escape
    'no-octal-escape': 2
  }
};
