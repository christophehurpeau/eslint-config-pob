'use strict';

const { env, overrideRules } = require('./_base');

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-script'],
  env,

  parserOptions: {
    // https://node.green/#ES2020
    // most 2020 features are supported in node 14
    // current ecmaVersion in eslint-plugin-node is 2019
    ecmaVersion: 2020,
  },

  rules: {
    ...overrideRules,
    'unicorn/prefer-module': 'off',
  },

  overrides: [
    {
      files: ['*.mjs'],
      extends: ['plugin:node/recommended-module'],
      rules: {
        ...overrideRules,
        'unicorn/prefer-module': 'error',
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
    },
    {
      files: ['*.cjs'],
      rules: {},
    },
  ],
};
