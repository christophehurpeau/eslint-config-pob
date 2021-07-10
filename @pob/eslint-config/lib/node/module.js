'use strict';

const { env, overrideRules } = require('./_base');

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-module'],
  parserOptions: {
    sourceType: 'module',
  },
  env,
  rules: {
    ...overrideRules,
    'unicorn/prefer-module': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        mjs: 'always',
        cjs: 'always',
        js: 'always',
      },
    ],
  },

  overrides: [
    {
      files: ['*.mjs'],
      rules: {},
    },
    {
      files: ['*.cjs'],
      extends: ['plugin:node/recommended-script'],
      rules: {
        ...overrideRules,
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
