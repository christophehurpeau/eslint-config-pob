"use strict";

module.exports = {
  extends: [
    "./_base",
    "./base/commonjs",
    "./plugins/import/import-commonjs",
    "./node/commonjs",
  ].map(require.resolve),

  overrides: [
    {
      files: ["*.mjs"],
      extends: [
        "./_base",
        "./base/module",
        "./plugins/import/import-module",
        "./node/module",
      ].map(require.resolve),
    },
    {
      files: ["*.cjs"],
    },
  ],
};
