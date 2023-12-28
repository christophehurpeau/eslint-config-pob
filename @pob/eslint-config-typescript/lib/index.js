'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    '@pob/eslint-config',
    './plugins/typescript-eslint',
    './plugins/typescript-eslint-replace-eslint',
    '@pob/eslint-config/prettier',
  ].map(require.resolve),

  parserOptions: {
    sourceType: 'module',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.ts', '.d.ts'],

    'import/core-modules': [
      'pob-babel', // import typings
    ],
  },

  rules: {
    strict: 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    // disallow require when using babel
    'import/no-commonjs': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/no-extraneous-dependencies.md
    // override default airbnb exceptions
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/no-anonymous-default-export.md
    // Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/extensions.md
    'import/extensions': ['error', 'ignorePackages'],

    /* disable rules covered by tsc */
    /* https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#eslint-plugin-import */
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',

    /* issues */

    // http://eslint.org/docs/rules/spaced-comment
    // conflicts with typescript triple slash
    'spaced-comment': 'off',
  },
};
