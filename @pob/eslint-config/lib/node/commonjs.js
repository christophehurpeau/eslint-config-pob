'use strict';

const { env, overrideRules } = require('./_base');

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-script'],
  env,
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
      },
    },
    {
      files: ['*.cjs'],
      rules: {},
    },
  ],
};
