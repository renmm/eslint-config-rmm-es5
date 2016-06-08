module.exports = {
  'rules': {
    // 为所有控制语句指定花括号约定
    // http://eslint.cn/docs/rules/curly
    'curly': [2, 'multi-line'],

    // 强制在点号之前或之后一致的换行
    // http://eslint.cn/docs/rules/dot-location
    'dot-location': [2, 'property'],

    // 禁止不必要的分号
    // http://eslint.cn/docs/rules/no-extra-semi
    'no-extra-semi': 2,

    // 禁止在字符串和注释之外不规则的空白
    // http://eslint.cn/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 2,

    // 确保 JSDoc 注释是有效的
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [2, {
      'prefer': {
        'augments': 'extends',
        'constructor': 'class',
        'constant': 'const',
        'defaultvalue': 'default',
        'description': 'desc',
        'host': 'external',
        'fileoverview': 'file',
        'overview': 'file',
        'emits': 'fires',
        'func': 'function',
        'method': 'function',
        'arg': 'param',
        'argument': 'param',
        'prop': 'property',
        'returns': 'return'
      },
      'preferType': {
        'String': 'string',
        'Number': 'number',
        'Boolean': 'boolean',
        'object': 'Object',
        'function': 'Function',
        'array': 'Array'
      }
    }],

    // 要求使用 JSDoc 注释
    // http://eslint.cn/docs/rules/require-jsdoc
    'require-jsdoc': [2, {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true
      }
    }],

    // 强制数组方括号中使用空格
    // http://eslint.cn/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [2, 'never'],

    // 禁止或强制在单行代码块中使用空格
    // http://eslint.cn/docs/rules/block-spacing
    'block-spacing': [2, 'always'],

    // 强制使用一种大括号风格
    // http://eslint.cn/docs/rules/brace-style
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],

    // 强制在逗号周围使用空格
    // http://eslint.cn/docs/rules/comma-spacing
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],

    // 强制使用一种逗号风格
    // http://eslint.cn/docs/rules/comma-style
    'comma-style': [2, 'last'],

    // 禁止或强制在计算属性中使用空格
    // http://eslint.cn/docs/rules/computed-property-spacing
    'computed-property-spacing': [2, 'never'],

    // 当获取当前执行环境的上下文时，强制使用一致的命名
    // http://eslint.cn/docs/rules/consistent-this
    'consistent-this': [2, 'that'],

    // 要求文件末尾保留一行空行
    // http://eslint.cn/docs/rules/eol-last
    'eol-last': 2,

    // 为你的代码指定 tab 或空格缩进宽度
    // http://eslint.cn/docs/rules/indent
    'indent': [2, 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 1
    }],

    // 强制对象字面量属性中键和值之间的间距
    // http://eslint.cn/docs/rules/key-spacing
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],

    // 强制关键字周围的间距
    // http://eslint.cn/docs/rules/keyword-spacing
    'keyword-spacing': [2, {
      'before': true,
      'after': true,
      'overrides': {
        'return': {
          'after': true
        },
        'throw': {
          'after': true
        },
        'case': {
          'after': true
        }
      }
    }],

    // 要求或禁止块之前的空格
    // http://eslint.cn/docs/rules/space-before-blocks
    'space-before-blocks': 2,

    // 要求或禁止函数左括号之前有一个空格
    // http://eslint.cn/docs/rules/space-before-function-paren
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'never'
    }],

    // 要求或禁止圆括号内有空格
    // http://eslint.cn/docs/rules/space-in-parens
    'space-in-parens': [2, 'never'],

    // 要求操作符周围有空格
    // http://eslint.cn/docs/rules/space-infix-ops
    'space-infix-ops': 2,

    // 要求或禁止在一元操作符之前或之后存在空格
    // http://eslint.cn/docs/rules/space-unary-ops
    'space-unary-ops': 2,

    // 强制注释周围有空行
    // http://eslint.cn/docs/rules/lines-around-comment
    'lines-around-comment': [2, {
      'beforeBlockComment': true,
      'beforeLineComment': true,
      'allowBlockStart': true,
      'allowObjectStart': true,
      'allowArrayStart': true,
    }],

    // 要求或禁止注释中// 或 /*紧跟一个空格
    // http://eslint.cn/docs/rules/spaced-comment
    'spaced-comment': [2, 'always', {
      'exceptions': ['-', '+'],

      // space here to support sprockets directives
      'markers': ['=', '!']
    }],

    // 强制换行风格
    // http://eslint.cn/docs/rules/linebreak-style
    'linebreak-style': 2,

    // 指定程序中允许的最大环路复杂度
    // http://eslint.cn/docs/rules/complexity
    'complexity': [2, 11],

    // 指定块可嵌套的最大深度
    // http://eslint.cn/docs/rules/max-depth
    'max-depth': [2, 4],

    // 指定你程序中一行的最大长度
    // http://eslint.cn/docs/rules/max-len
    'max-len': [2, 100, 2, {
      'ignoreUrls': true,
      'ignoreComments': false
    }],

    // 要求构造函数首字母大写
    // http://eslint.cn/docs/rules/new-cap
    'new-cap': 2,

    // 要求或禁止变量声明语句后有一行空行
    // http://eslint.cn/docs/rules/newline-after-var
    'newline-after-var': [2, 'always'],

    // 要求return语句之前有新行
    // http://eslint.cn/docs/rules/newline-before-return
    'newline-before-return': 2,

    // 强制链式调用时每次调用之后有新行
    // http://eslint.cn/docs/rules/newline-per-chained-call
    'newline-per-chained-call': [2, {
      'ignoreChainWithDepth': 3
    }],

    // 不允许使用Array的构造函数创建数组
    // http://eslint.cn/docs/rules/no-array-constructor
    'no-array-constructor': 2,

    // 不允许使用 continue 语句
    // http://eslint.cn/docs/rules/no-continue
    'no-continue': 2,

    // 不允许代码行后有注释
    // http://eslint.cn/docs/rules/no-inline-comments
    'no-inline-comments': 2,

    // 禁止if作为唯一的语句出现在else语句中
    // http://eslint.cn/docs/rules/no-lonely-if
    'no-lonely-if': 2,

    // 不允许空格和 tab 混合缩进
    // http://eslint.cn/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 2,

    // 不允许多个空行
    // http://eslint.cn/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [2, {
      'max': 2,
      'maxEOF': 1
    }],

    // 禁用行尾空格
    // http://eslint.cn/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 2,

    // 在有更简单的可替代的表达式存在时，禁止使用三元操作符
    // http://eslint.cn/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],

    // 完全禁止或在可能的情况下要求使用简化的赋值操作符
    // http://eslint.cn/docs/rules/operator-assignment
    'operator-assignment': [2, 'always'],

    // 强制操作符放在换行符之前或之后
    // http://eslint.cn/docs/rules/operator-linebreak
    'operator-linebreak': [2, 'before'],

    // 强制块内填充
    // http://eslint.cn/docs/rules/padded-blocks
    'padded-blocks': [2, 'never'],

    // 指定是否应使用反勾号、双引号或单引号
    // http://eslint.cn/docs/rules/quotes
    'quotes': [2, 'single', 'avoid-escape'],

    // 要求或禁止使用分号而不是 ASI
    // http://eslint.cn/docs/rules/semi
    'semi': [2, 'always'],

    // 强制分号之前和之后有空格
    // http://eslint.cn/docs/rules/semi-spacing
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],

    // 指定单行允许的语句块最大数量
    // http://eslint.cn/docs/rules/max-statements-per-line
    'max-statements-per-line': [0, {
      'max': 1
    }],

    // 不允许否定的表达式
    // http://eslint.cn/docs/rules/no-negated-condition
    'no-negated-condition': 0,

    // 不允许使用嵌套的三元表达式
    // http://eslint.cn/docs/rules/no-nested-ternary
    'no-nested-ternary': 0,

    // 不允许使用++ 和 --
    // http://eslint.cn/docs/rules/no-plusplus
    'no-plusplus': 0,

    // 不允许使用三元操作符
    // http://eslint.cn/docs/rules/no-ternary
    'no-ternary': 0,

    // 禁止标识符中有悬空下划线
    // http://eslint.cn/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 0,

    // 强制对同一个声明块中的变量进行排序
    // http://eslint.cn/docs/rules/sort-vars
    'sort-vars': 0
  }
};
