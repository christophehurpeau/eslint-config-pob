"use strict";

module.exports = {
  extends: ["./node-module", "./rules/dev-only"].map(require.resolve),
  ignorePatterns: ["**/node_modules/**"],
};
