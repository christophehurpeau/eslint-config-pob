'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/rules/react-hooks',
    '@pob/eslint-config/prettier', // reapply prettier
    '@pob/eslint-config/rules/expert', // reapply expert: eslint-config-airbnb/rules/react modifies no-underscore-dangle
    './rules/react',
  ].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx', '.d.ts', '.d.tsx'],
      },
    },
  },

  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
  },
};
