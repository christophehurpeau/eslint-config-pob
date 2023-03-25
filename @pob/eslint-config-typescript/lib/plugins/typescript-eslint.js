'use strict';

const { enableIfVSCode } = require('@pob/eslint-config/utils');

module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/all'],

  rules: {
    // disabled by prettier : indent, member-delimiter-style, type-annotation-spacing

    /* warnings: not required to be fixed, but should require attention */
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',

    /* disabled */

    // too much errors on existing code
    '@typescript-eslint/unbound-method': 'off',

    // too verbose and eslint already makes sure we don't modify parameters
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // most of the time it's sorted by the developer as it is easier to read
    '@typescript-eslint/sort-type-union-intersection-members': 'off',

    // formatting rule
    '@typescript-eslint/lines-around-comment': 'off',

    /* Not enabled */

    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unified-signatures': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',

    // enable dot-notation, like https://github.com/airbnb/javascript/blob/5b462a04cdfebba712a3df18926edfcb4103d2a9/packages/eslint-config-airbnb-base/rules/best-practices.js#L40-L41
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    // Testing rules as warn
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/naming-convention': [
      enableIfVSCode('warn'),
      // Enforce that interface names do not begin with an I
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // Enforce that boolean are prefixed with an allowed verb
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'property',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'parameterProperty',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      // Enforce that type is in PascalCase
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': 'warn',

    /* changed */

    // prefer interface
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // allow expressions
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/issues/201
    // private is coming in js world and no-public will be the most common way to read a js file (and probably ts)
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
  },
};
