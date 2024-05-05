"use strict";

exports.overrideRules = {
  // Disable rules already checked by import plugin
  "n/no-unpublished-require": "off",
  "n/no-extraneous-require": "off",
  "n/no-unpublished-import": "off",
  "n/no-extraneous-import": "off",
  "n/no-missing-require": "off",
  "n/no-missing-import": "off",

  // Allow process.exit
  "n/no-process-exit": "off",

  // ensure deprecated eslint rules are disabled
  "callback-return": "off",
  "global-require": "off",
  "handle-callback-err": "off",
  "no-mixed-requires": "off",
  "no-new-require": "off",
  "no-path-concat": "off",
  "no-process-env": "off",
  "no-process-exit": "off",
  "no-restricted-modules": "off",
  "no-sync": "off",

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/extensions.md
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      mjs: "always",
      cjs: "always",
      js: "never",
    },
  ],
};

exports.env = {
  browser: false,
  node: true,
  es6: true,
};
