'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    ...[
      './plugins/unicorn',
      './rules/best-practices',
      './rules/code-quality',
      './rules/errors',
      './rules/style',
      './plugins/import/import-base',
      './plugins/import/import-commonjs',
    ].map(require.resolve),
  ],

  parserOptions: {
    sourceType: 'script',
  },

  rules: {
    strict: ['error', 'safe'],
  },

  overrides: [
    {
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
      extends: [require.resolve('./plugins/import/import-module')],
    },
    {
      files: ['*.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
      extends: [require.resolve('./plugins/import/import-commonjs')],
    },
  ],
};
