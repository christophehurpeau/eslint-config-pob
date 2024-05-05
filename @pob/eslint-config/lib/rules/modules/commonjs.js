"use strict";

module.exports = {
  rules: {
    // https://eslint.org/docs/rules/global-require
    "global-require": "error",

    // disallow use of new operator with the require function
    "no-new-require": "error",
  },
};
