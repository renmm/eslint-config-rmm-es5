module.exports = {
  'rules': {
    // 禁止 this 关键字出现在类和类对象之外
    // http://eslint.cn/docs/rules/no-invalid-this
    'no-invalid-this': 2,

    // 禁止对原生对象赋值
    // http://eslint.cn/docs/rules/no-native-reassign
    'no-native-reassign': 2,

    // 禁用__proto__属性
    // http://eslint.cn/docs/rules/no-proto
    'no-proto': 2,

    //  创建对象字面量时，禁止重复的键
    //  http://eslint.cn/docs/rules/no-dupe-keys
    'no-dupe-keys': 2,

    // 禁止全局对象(Math 和 JSON)当作函数使用
    // http://eslint.cn/docs/rules/no-obj-calls
    'no-obj-calls': 2,

    // 不允许使用Object的构造函数
    // http://eslint.cn/docs/rules/no-new-object
    'no-new-object': 2,

    // 禁止属性前有空白
    // http://eslint.cn/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 2,

    // 禁止或强制对象的花括号中有空格
    'object-curly-spacing': [2, 'always'],

    // 强制 getter/setter 成对出现在对象中
    // http://eslint.cn/docs/rules/accessor-pairs
    'accessor-pairs': 0
  }
};
