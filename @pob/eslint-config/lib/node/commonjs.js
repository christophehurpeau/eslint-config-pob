'use strict';

const { env, overrideRules } = require('./_base');

module.exports = {
  plugins: ['n'],
  extends: ['plugin:n/recommended-script'],
  env,

  parserOptions: {
    // https://node.green/#ES2020
    // most 2020 features are supported in node 14
    // top level await is introduced in 2022
    // current ecmaVersion in eslint-plugin-node is 2019
    ecmaVersion: 2022,
  },

  rules: {
    ...overrideRules,
    'unicorn/prefer-module': 'off',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
  },
};
