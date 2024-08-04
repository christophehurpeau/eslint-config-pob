export default {
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
