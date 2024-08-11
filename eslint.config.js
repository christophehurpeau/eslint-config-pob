import pobTypescriptConfig, {
  apply,
  extensions,
} from "@pob/eslint-config-typescript";
import pobTypescriptConfigReact from "@pob/eslint-config-typescript-react";

export default [
  ...pobTypescriptConfig(import.meta.url).configs.node,
  ...apply({
    files: ["@pob/eslint-config-typescript-react/test-lint/**/"],
    mode: "directory",
    configs: pobTypescriptConfigReact(import.meta.url).configs.node,
    extensions,
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
      "import/no-extraneous-dependencies": "off",
    },
  },
];
