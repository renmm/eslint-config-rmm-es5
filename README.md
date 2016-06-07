# eslint-config-rmm-es5

[![js-code-style](https://img.shields.io/badge/code--style-rmm--es5-brightgreen.svg)](https://github.com/renmm/javascript-style)

此包提供了[javascript编码规范](https://github.com/renmm/javascript-style)的eslint版本。

## 使用

提供三个包给大家使用，默认es5规范,node,legacy。

### eslint-config-rmm-es5

默认导出所有的 eslint 规则，包括 ES5 规范。 安装此包依赖以下两个lib:

- eslint
- eslint-plugin-import

安装并使用：

- cd your_project
- `npm install --save-dev eslint-config-rmm-es5 eslint-plugin-import eslint`
- touch .eslintrc
- 添加 `"extends": "rmm-es5"` 到你的 .eslintrc

### eslint-config-rmm-es5/legacy

兼容IE8项目。只包括IE8部分，不能单独使用，需和 `rmm-es5`  配合使用。

需要在你的项目里的.eslintrc里添加：

```javascript
{
  "extends": ["rmm-es5","rmm-es5/legacy"]
}
```

### eslint-config-rmm-es5/node

node相关约定。同样也不能单独使用，需和 `rmm-es5`  配合使用。

需要在你的项目里的.eslintrc里添加：

```javascript
{
  "extends": ["rmm-es5","rmm-es5/node"]
}
```

有关javascript编码规范的详细内容，可以关注[javascript编码规范](https://github.com/renmm/javascript-style)

## 测试

包含针对每条eslint规则的测试。`test/rules/*ruleName*Space.js`

- npm install
- npm test

## 待改进

- 完善测试
- 加入代码覆盖测试，持续集成
- 链接es6相关规范
