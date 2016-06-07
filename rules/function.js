module.exports = {
  'rules': {
    // 禁用空函数
    // http://eslint.cn/docs/rules/no-empty-function
    'no-empty-function': 2,

    // 禁止不必要的函数绑定
    // http://eslint.cn/docs/rules/no-extra-bind
    'no-extra-bind': 2,

    // 禁止对Function对象使用new操作符
    // http://eslint.cn/docs/rules/no-new-func
    'no-new-func': 2,

    // 不允许对函数的参数进行重新赋值
    // http://eslint.cn/docs/rules/no-param-reassign
    // REVIEW: 需要对此规则验证，再决定是否启用。
    'no-param-reassign': [2, {
      'props': true
    }],

    // 指定回调函数最大嵌套深度
		// http://eslint.cn/docs/rules/max-nested-callbacks
    'max-nested-callbacks': [2, 3],

    // 禁用 arguments.caller 或 arguments.callee
    // http://eslint.cn/docs/rules/no-caller
    'no-caller': 2,

    // 禁止在循环中创建函数
    // http://eslint.cn/docs/rules/no-loop-func
    'no-loop-func': 2,

    // 禁止函数中有重复参数
    // http://eslint.cn/docs/rules/no-dupe-args
    'no-dupe-args': 2,

    // 指定函数声明中可使用的参数数量
    // http://eslint.cn/docs/rules/max-params
    'max-params': [2, 3],

    // 禁止重写函数声明
    // http://eslint.cn/docs/rules/no-func-assign
    'no-func-assign': 2,

    // 禁止在嵌套的块中声明函数或变量
    // http://eslint.cn/docs/rules/no-inner-declarations
    'no-inner-declarations': 2,

    // 调用无参构造函数时，不允许省略圆括号
    // http://eslint.cn/docs/rules/new-parens
    'new-parens': 2,

    // 不允许函数调用时，function 标识符和括号之间有空格
    // http://eslint.cn/docs/rules/no-spaced-func
    'no-spaced-func': 2,

    // 要求函数表达式有个一名字
    // http://eslint.cn/docs/rules/func-names
    'func-names': 1,

    // 强制使用函数声明或函数表达式
    // http://eslint.cn/docs/rules/func-style
    'func-style': 0,

    // 非赋值或条件语句禁止使用new操作符
    // http://eslint.cn/docs/rules/no-new
    'no-new': 0,

    // 禁止不必要的 .call() 和 .apply()
    // http://eslint.cn/docs/rules/no-useless-call
    // HACK: 不太理解规则的推荐写法。
    'no-useless-call': 0,

    // 指定一个函数所允许的语句的最大数量
    // http://eslint.cn/docs/rules/max-statements
    'max-statements': [0, 10]
  }
};
