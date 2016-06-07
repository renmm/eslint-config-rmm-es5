module.exports = {
  extends: [
    './rules/legacy'
  ].map(require.resolve)
};
