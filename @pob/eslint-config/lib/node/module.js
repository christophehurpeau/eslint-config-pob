import pobPlugin from "@pob/eslint-plugin";
import nodePlugin from "eslint-plugin-n";
import { overrideRules } from "./_base.js";

export default [
  nodePlugin.configs["flat/recommended-module"],
  pobPlugin.configs.node,
  {
    name: "@pob/eslint-config/node/module",
    rules: {
      ...overrideRules,
      "unicorn/prefer-module": "error",
      "unicorn/import-index": "off",

      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/extensions.md
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          mjs: "always",
          cjs: "always",
          js: "always",
        },
      ],
    },
  },
];
