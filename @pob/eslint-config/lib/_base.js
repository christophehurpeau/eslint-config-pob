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
};
