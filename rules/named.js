module.exports = {
  'rules': {
    // http://eslint.cn/docs/rules/camelcase
    'camelcase': [2, {
      'properties': 'never'
    }],

    // 禁止某些标识，以防止正在使用他们
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': [2, 'data', 'err', 'callback', 'cb'],

    // 要求使用骆驼拼写法
    // 强制标识符的最新和最大长度（变量名，属性明等）
    // http://eslint.cn/docs/rules/id-length
    'id-length': [1, {
      'min': 2,
      'max': 30,
      'exceptions': ['x', 'y', 'z']
    }],

    // 要求标识符匹配所提供的正则表达式
    // http://eslint.cn/docs/rules/id-match
    'id-match': 0
  }
};
