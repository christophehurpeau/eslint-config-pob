'use strict';

module.exports = {
  plugins: ['import'],

  settings: {
    'import/extensions': ['.js', '.mjs'],
    'import/core-modules': [],
    'import/ignore': ['node_modules'],
  },

  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/named': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-empty-named-blocks.md
    'import/no-empty-named-blocks': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: { order: 'asc', caseInsensitive: false },
        'newlines-between': 'never',
      },
    ],
  },
};
