'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('eslint-plugin-node/package.json'));

exports.overrideRules = {
  // Disable rules already checked by import plugin
  'node/no-unpublished-require': 'off',
  'node/no-extraneous-require': 'off',
  'node/no-unpublished-import': 'off',
  'node/no-extraneous-import': 'off',

  // Allow process.exit
  'node/no-process-exit': 'off',

  // ensure deprecated eslint rules are disabled
  'callback-return': 'off',
  'global-require': 'off',
  'handle-callback-err': 'off',
  'no-mixed-requires': 'off',
  'no-new-require': 'off',
  'no-path-concat': 'off',
  'no-process-env': 'off',
  'no-process-exit': 'off',
  'no-restricted-modules': 'off',
  'no-sync': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/extensions.md
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      mjs: 'always',
      cjs: 'always',
      js: 'never',
    },
  ],
};

exports.env = {
  browser: false,
  node: true,
  es6: true,
};
