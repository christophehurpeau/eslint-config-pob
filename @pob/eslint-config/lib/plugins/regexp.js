import eslintPluginRegexp from "eslint-plugin-regexp";

export default [
  eslintPluginRegexp.configs["flat/recommended"],
  {
    name: "@pob/eslint-config/regexp",
    rules: {},
  },
];
