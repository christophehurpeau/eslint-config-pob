export default {
  name: "@pob/eslint-config/test",

  rules: {
    // allow dev dependencies
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
