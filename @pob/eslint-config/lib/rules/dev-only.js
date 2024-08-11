export default {
  name: "@pob/eslint-config/dev-only",
  files: ["**/*.{js,cjs,mjs}"],
  ignores: ["**/{src,lib}/*.{js,cjs,mjs}"],
  rules: {
    "no-console": "off",

    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
