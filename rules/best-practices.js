module.exports = {
  'rules': {
    // 要求 return 语句要么总是指定返回的值，要么不指定
    // http://eslint.cn/docs/rules/consistent-return
    'consistent-return': 2,

    // 禁止 return，throw，continue 或 break 语句之后的不可达语句
    // http://eslint.cn/docs/rules/no-unreachable
    'no-unreachable': 2,

    // 禁止if语句中有return之后有else
    // http://eslint.cn/docs/rules/no-else-return
    'no-else-return': 2,

    // 禁止在return语句中使用赋值语句
    // http://eslint.cn/docs/rules/no-return-assign
    'no-return-assign': 2,

    // 要求 switch语句中有default分支
    // http://eslint.cn/docs/rules/default-case
    'default-case': [2, {
      'commentPattern': '^no default$'
    }],

    // 鼓励尽可能使用点号
    // http://eslint.cn/docs/rules/dot-notation
    'dot-notation': [2, {
      'allowKeywords': true
    }],

    // 要求使用 === 和 !==
    // http://eslint.cn/docs/rules/eqeq!!eq
    'eqeqeq': [2, 'allow-null'],

    // 确保for-in循环中有一个 if语句
    // http://eslint.cn/docs/rules/guard-for-in
    'guard-for-in': 2,

    // 禁止in操作符的否定的左操作数
    // http://eslint.cn/docs/rules/no-negated-in-lhs
    'no-negated-in-lhs': 2,

    // 不允许在 case 子句中使用词法声明
    // http://eslint.cn/docs/rules/no-case-declarations
    'no-case-declarations': 2,

    // 禁止空语句块
    // http://eslint.cn/docs/rules/no-empty
    'no-empty': 2,

    // 禁止在没有类型检查操作符情况下与 null 进行比较
    // http://eslint.cn/docs/rules/no-eq-null
    'no-eq-null': 2,

    // 禁用 eval()
    // http://eslint.cn/docs/rules/no-eval
    'no-eval': 2,

    // 禁止扩展原生类型
    // http://eslint.cn/docs/rules/no-extend-native
    'no-extend-native': 2,

    // 禁用不必要的标签
    // http://eslint.cn/docs/rules/no-extra-label
    'no-extra-label': 2,

    // 禁止case语句落空
    // http://eslint.cn/docs/rules/no-fallthrough
    'no-fallthrough': 2,

    // 禁止重复的 case 标签
    // http://eslint.cn/docs/rules/no-duplicate-case
    'no-duplicate-case': 2,

    // 禁止用短符号进行类型转换
    // http://eslint.cn/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [2, {
      'allow': ['!!']
    }],

    // 在布尔类型的上下文中禁止双重否定布尔转换
    // http://eslint.cn/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 2,

    // 禁止使用隐式eval()
    // http://eslint.cn/docs/rules/no-implied-eval
    'no-implied-eval': 2,

    // 禁用 __iterator__属性
    // http://eslint.cn/docs/rules/no-iterator
    'no-iterator': 2,

    // 禁用标签语句
    // http://eslint.cn/docs/rules/no-labels
    'no-labels': 2,

    // 禁用不必要的嵌套块
    // http://eslint.cn/docs/rules/no-lone-blocks
    'no-lone-blocks': 2,

    // 禁止使用多个空格
    // http://eslint.cn/docs/rules/no-multi-spaces
    'no-multi-spaces': 2,

    // 禁止创建String，Number和 Boolean的新实例
    // http://eslint.cn/docs/rules/no-new-wrappers
    'no-new-wrappers': 2,

    // 禁止使用javascript: url
    // http://eslint.cn/docs/rules/no-script-url
    'no-script-url': 2,

    // 不允许在代码中使用特定的语法
    // http://eslint.cn/docs/rules/no-restricted-syntax
    // FIXME: 不应该放在这里，待重构。
    // REVIEW: 思考哪些特定语法需要禁用？
    'no-restricted-syntax': [
      2,
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // 禁止自身比较
    // http://eslint.cn/docs/rules/no-self-compare
    'no-self-compare': 2,

    // 禁用逗号操作符
    // http://eslint.cn/docs/rules/no-sequences
    'no-sequences': 2,

    // 限制可被抛出的异常
    // http://eslint.cn/docs/rules/no-throw-literal
    'no-throw-literal': 2,

    // 禁止在finally块控制流语句
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 2,

    // 禁止对 catch 块的异常进行赋值
    // http://eslint.cn/docs/rules/no-ex-assign
    'no-ex-assign': 2,

    // 禁止未使用过的表达式
    // http://eslint.cn/docs/rules/no-unused-expressions
    // REVIEW: 验证下此条规则，再确认是否开启。
    'no-unused-expressions': [2, {
      'allowShortCircuit': true,
      'allowTernary': true
    }],

    // 禁用未使用过的标签
    // http://eslint.cn/docs/rules/no-unused-labels
    'no-unused-labels': 2,

    // 禁用不必要的转义字符
    // http://eslint.cn/docs/rules/no-useless-escape
    'no-useless-escape': 2,

    // 禁用void操作符
    // http://eslint.cn/docs/rules/no-void
    'no-void': 2,

    // 禁用with语句
    // http://eslint.cn/docs/rules/no-with
    'no-with': 2,

    // 禁止不必要的括号
    // http://eslint.cn/docs/rules/no-extra-parens
    'no-extra-parens': [2, 'all', {
      'conditionalAssign': true,
      'nestedBinaryExpressions': false
    }],

    // 要求 IIFE 使用括号括起来
    // http://eslint.cn/docs/rules/wrap-iife
    'wrap-iife': [2, 'outside'],

    // 要求或禁止 Yoda 条件
    // http://eslint.cn/docs/rules/yoda
    'yoda': 2,

    // 确保 typeof 结果与一个有效的字符串相比较
    // http://eslint.cn/docs/rules/valid-typeof
    'valid-typeof': 2,

    // 禁止条件表达式中赋值
    // http://eslint.cn/docs/rules/no-cond-assign
    'no-cond-assign': 2,

    // 禁止在条件中使用常量表达式
    // http://eslint.cn/docs/rules/no-constant-condition
    'no-constant-condition': 2,

    // 禁用 debugger
    // http://eslint.cn/docs/rules/no-debugger
    'no-debugger': 2,

    // 禁用 alert，confirm 和 prompt
    // http://eslint.cn/docs/rules/no-alert
    'no-alert': 1,

    // 禁用 console
    // http://eslint.cn/docs/rules/no-console
    'no-console': 1,

    // 禁止在注释中使用可配置的警告术语: 比如 TODO 或 FIXME
    // http://eslint.cn/docs/rules/no-warning-comments
    'no-warning-comments': [1, {
      'terms': ['todo', 'fixme', 'xxx', 'hack', 'review'],
      'location': 'anywhere'
    }],

    // 禁用一成不变的循环条件
    // http://eslint.cn/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 0,

    // 禁用process.env
    // http://eslint.cn/docs/rules/no-process-env
    'no-process-env': 0,

    // 禁止代码看起来像两个表达式但实际上是一个
    // http://eslint.cn/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 0,

    // 禁止在全局范围内使用var和命名函数
    // http://eslint.cn/docs/rules/no-implicit-globals
    'no-implicit-globals': 0,

    // 禁用按位操作符
    // http://eslint.cn/docs/rules/no-bitwise
    'no-bitwise': 0
  }
};
