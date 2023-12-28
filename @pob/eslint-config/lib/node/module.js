'use strict';

const { env, overrideRules } = require('./_base.js');

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-module'],
  parserOptions: {
    sourceType: 'module',
    // https://node.green/#ES2020
    // most 2020 features are supported in node 14
    // top level await is introduced in 2022
    // current ecmaVersion in eslint-plugin-node is 2019
    ecmaVersion: 2022,
  },
  env,
  rules: {
    ...overrideRules,
    'unicorn/prefer-module': 'error',
    'unicorn/import-index': 'off',
  },

  overrides: [
    {
      files: ['*.mjs'],
      rules: {},
    },
    {
      files: ['*.cjs'],
      extends: ['plugin:node/recommended-script'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2022,
      },
      rules: {
        strict: ['error', 'safe'],
        ...overrideRules,
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
