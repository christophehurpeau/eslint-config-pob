// import checkPackage from "check-package-dependencies/eslint-plugin";
import pobConfig, { apply, tsExtensions } from "@pob/eslint-config";
import pobTypescriptConfigReact from "@pob/eslint-config-typescript-react";

export default [
  ...pobConfig(import.meta.url).configs.node,
  ...apply({
    files: ["@pob/eslint-config-typescript-react/test-lint/**/"],
    mode: "directory",
    configs: pobTypescriptConfigReact(import.meta.url).configs.node,
    extensions: tsExtensions,
  }).map((config) => ({
    ...config,
    files: config.files
      ? config.files.map((file) =>
          file.replace(
            /^\*\*\//,
            "@pob/eslint-config-typescript-react/test-lint/**/",
          ),
        )
      : ["@pob/eslint-config-typescript-react/test-lint/**/*.{ts,tsx}"],
  })),
  {
    files: ["**/test-lint/**/*.{js,cjs,mjs}"],
    rules: {
      "import-x/no-extraneous-dependencies": "off",
    },
  },
  // checkPackage.configs["recommended-library"],
];
