export default {
  name: "@pob/eslint-config-typescript/plugins/import",

  settings: {
    "import-x/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
  },

  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
    "import-x/consistent-type-specifier-style": "error",
  },
};
