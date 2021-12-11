'use strict';

const { env, overrideRules } = require('./_base');

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-module'],
  parserOptions: {
    sourceType: 'module',
    // https://node.green/#ES2020
    // most 2020 features are supported in node 14
    // top level await is introduced in 2021
    // current ecmaVersion in eslint-plugin-node is 2019
    ecmaVersion: 2021,
  },
  env,
  rules: {
    ...overrideRules,
    'unicorn/prefer-module': 'error',
    'unicorn/import-index': 'off',

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
