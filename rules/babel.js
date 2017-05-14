module.exports = {
  plugins: ['babel'],
  rules: {
    // 'new-cap': 0,
    // 'babel/new-cap':  [2, { newIsCap: true }],
    // 'object-curly-spacing': 0,
    // 'babel/object-curly-spacing': [2, 'always'],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    // `export default from './foo'` should work
    'import/no-named-as-default': 'off',
  },
};
