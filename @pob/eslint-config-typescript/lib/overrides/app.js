export default {
  name: "@pob/eslint-config-typescript/app",
  settings: {
    node: { moduleDirectory: ["node_modules", "src"] },
  },
  rules: {
    /* No need for this rule in an app */
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
