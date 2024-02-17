'use strict';

module.exports = {
  plugins: ['n'],
  extends: ['plugin:n/recommended-module'],

  rules: {
    // already checked by import plugin
    'n/no-unpublished-require': 'off',
    'n/no-extraneous-require': 'off',

    // disable no-unsupported-features when using babel
    'n/no-unsupported-features/es-builtins': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
    'n/no-missing-import': 'off',
    'n/no-unpublished-import': 'off',
  },
};
