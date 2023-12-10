'use strict';

module.exports = {
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'ignorePackages',
        cjs: 'ignorePackages',
        mjs: 'ignorePackages',
        ts: 'ignorePackages',
      },
    ],
  },
};
