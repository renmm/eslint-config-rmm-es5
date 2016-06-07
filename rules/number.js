module.exports = {
  'rules': {
    // 禁用八进制字面量
    // http://eslint.cn/docs/rules/no-octal
    'no-octal': 2,

    // 禁止数字字面量中使用前导和末尾小数点
    // http://eslint.cn/docs/rules/no-floating-decimal
    'no-floating-decimal': 2,

    // 要求使用parseInt()的第二个参数
    // http://eslint.cn/docs/rules/radix
    'radix': 2,

    // 禁止与 NaN进行比较
    // http://eslint.cn/docs/rules/use-isnan
    'use-isnan': 2
  }
};
