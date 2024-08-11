import nodePlugin from "eslint-plugin-n";
import { overrideRules } from "./_base.js";

export default [
  nodePlugin.configs["flat/recommended-script"],
  {
    name: "@pob/eslint-config/node/commonjs",
    rules: {
      ...overrideRules,
      // "unicorn/prefer-module": "off",
      "n/no-new-require": "error",
      "n/no-path-concat": "error",
    },
  },
];
