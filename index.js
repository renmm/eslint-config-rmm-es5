module.exports = {
  extends: [
    './rules/number',
    './rules/string',
    './rules/array',
    './rules/object',
    './rules/function',
    './rules/regex',
    './rules/variables',
    './rules/named',
    './rules/style',
    './rules/best-practices',
  ].map(require.resolve)
};
