export default {
  name: "@pob/eslint-config-typescript/base",
  languageOptions: {
    parserOptions: {
      project: true,
    },
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", ".ts"],
      },
    },
    "import/extensions": [".js", ".mjs", ".ts", ".d.ts"],
  },
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/no-anonymous-default-export.md
    // Reports if a module's default export is unnamed
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/extensions.md
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "ignorePackages",
        cjs: "ignorePackages",
        mjs: "ignorePackages",
        cts: "ignorePackages",
        mts: "ignorePackages",
        ts: "ignorePackages",
      },
    ],

    /* issues */

    // http://eslint.org/docs/rules/spaced-comment
    // conflicts with typescript triple slash
    "spaced-comment": "off",

    /* some exported type doesnt work. tsc check that anyway */
    "import/named": "off",
  },
};
