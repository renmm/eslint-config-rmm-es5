module.exports = {
  'rules': {
    // 要求或禁止变量声明填充一个换行符
    // http://eslint.cn/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': [2, 'initializations'],

    // 把 var 语句看作是在块级作用域范围之内
    // http://eslint.cn/docs/rules/block-scoped-var
    'block-scoped-var': 2,

    // 禁止多次声明同一变量
    // http://eslint.cn/docs/rules/no-redeclare
    'no-redeclare': 2,

    // 禁用魔术数字
    // http://eslint.cn/docs/rules/no-magic-numbers
    'no-magic-numbers': [2, {
      'ignore': [1],
      'ignoreArrayIndexes': true,
      'enforceConst': true,
      'detectObjects': false,
    }],

    // 要求所有的 var 声明在它们所在的作用域顶部
    // http://eslint.cn/docs/rules/vars-on-top
    'vars-on-top': 2,

    // 不允许删除变量
    // http://eslint.cn/docs/rules/no-delete-var
    'no-delete-var': 2,

    // 不允许标签与变量同名
    // http://eslint.cn/docs/rules/no-label-var
    'no-label-var': 2,

    // 禁止自我赋值
    // http://eslint.cn/docs/rules/no-self-assign
    // REVIEW: 需要验证下此规则，再确定是否启用？
    'no-self-assign': 2,

    // 禁止覆盖受限制的标识符，比如arguments
    // http://eslint.cn/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 2,

    // 不允许声明在外层作用域下已声明过的变量
    // http://eslint.cn/docs/rules/no-shadow
    'no-shadow': 2,

    // 不允许变量初始化为 undefined
    // http://eslint.cn/docs/rules/no-undef-init
    'no-undef-init': 0,

    // 禁用未声明的变量，除非它们在/*global */块中被提到
    // http://eslint.cn/docs/rules/no-undef
    'no-undef': 2,

    // 不允许使用 undefined 变量
    // http://eslint.cn/docs/rules/no-undefined
    'no-undefined': 2,

    // 不允许代码中的变量只声明而不使用
    // http://eslint.cn/docs/rules/no-unused-vars
    'no-unused-vars': [2, {
      'vars': 'local',
      'args': 'after-used'
    }],

    // 不允许在变量定义之前使用它们
    // http://eslint.cn/docs/rules/no-use-before-define
    'no-use-before-define': [2, {
      'functions': false,
      'classes': false
    }],

    // 强制或禁止在变量声明时进行初始化
    // http://eslint.cn/docs/rules/init-declarations
    'init-declarations': 0,

    // 限制指定的全局变量的使用
    // http://eslint.cn/docs/rules/no-restricted-globals
    'no-restricted-globals': 0,

    // 要求或禁止每个函数只有一个变量声明
    // http://eslint.cn/docs/rules/one-var
    'one-var': [2, 'never']
  }
};
