'use strict';

module.exports = {
  rules: {
    'class-methods-use-this': 'off', // http://eslint.org/docs/rules/class-methods-use-this
    'consistent-return': 'off', // http://eslint.org/docs/rules/consistent-return
    'default-case': 'off', // http://eslint.org/docs/rules/default-case
    'func-names': 'off', // http://eslint.org/docs/rules/func-names
    'no-await-in-loop': 'off', // http://eslint.org/docs/rules/no-continue
    'no-continue': 'off', // http://eslint.org/docs/rules/no-continue
    'no-empty': 'off', // http://eslint.org/docs/rules/no-empty
    'no-loop-func': 'off', // http://eslint.org/docs/rules/no-loop-func
    'no-param-reassign': 'off', // http://eslint.org/docs/rules/no-param-reassign
    'no-plusplus': 'off', // http://eslint.org/docs/rules/no-plusplus
    'no-shadow': 'off', // http://eslint.org/docs/rules/no-shadow
    'no-underscore-dangle': 'off', // http://eslint.org/docs/rules/no-underscore-dangle
    'prefer-destructuring': 'off', // http://eslint.org/docs/rules/prefer-destructuring

    // Allow for-of, now supported by node 6 and modern browsers
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      // => allow 'ForOfStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    /* import plugin */

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    // `export default from './foo'` should work
    'import/no-named-as-default': 'off',

    'import/prefer-default-export': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  },
};
