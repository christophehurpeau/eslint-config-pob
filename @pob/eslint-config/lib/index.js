'use strict';

module.exports = {
  extends: ['./_base', './base/commonjs'].map(require.resolve),

  overrides: [
    {
      files: ['*.mjs'],
      extends: ['./base/module', './plugins/import/import-module'].map(
        require.resolve,
      ),
    },
    {
      files: ['*.cjs'],
      extends: ['./base/commonjs', './plugins/import/import-commonjs'].map(
        require.resolve,
      ),
    },
  ],
};
