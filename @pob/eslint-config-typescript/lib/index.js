import pobConfig from "@pob/eslint-config";
// eslint-disable-next-line import/no-unresolved -- missing exports support see https://gist.github.com/danielweck/cd63af8e9a8b3492abacc312af9f28fd for potential fix
import tseslint from "typescript-eslint";
import nodePluginOverrideConfig from "./plugins/node.js";
import replaceEslintConfig from "./plugins/typescript-eslint/typescript-eslint-replace-eslint.js";
import replaceUnicornConfig from "./plugins/typescript-eslint/typescript-eslint-replace-unicorn.js";
import rules from "./plugins/typescript-eslint/typescript-eslint-rules.js";
import allowUnsafeConfig from "./rules/allow-unsafe.js";
import appConfig from "./rules/app.js";
import baseConfig from "./rules/base.js";
import nodeConfig from "./rules/node.js";
import testConfig from "./rules/test.js";

export const extensions = "{ts,cts,mts,tsx}";

export default (url) => {
  const { configs, compat } = pobConfig(url);
  return {
    compat,
    configs: {
      node: [
        ...configs.nodeModule,
        ...[
          ...tseslint.configs.strictTypeChecked,
          replaceUnicornConfig,
          replaceEslintConfig,
          rules,
          baseConfig,
          nodeConfig,
          nodePluginOverrideConfig,
        ].map((config) => ({
          ...config,
          files: [`**/*.${extensions}`],
        })),
        {
          ...testConfig,
          files: [
            `**/*.test${extensions}`,
            `**/__tests__/**/*.${extensions}`,
            `**/__mocks__/**/*.${extensions}`,
          ],
        },
      ],

      allowUnsafe: [
        {
          files: [`**/*.${extensions}`],
          ...allowUnsafeConfig,
        },
      ],

      app: [
        {
          files: [`**/*.${extensions}`],
          ...appConfig,
        },
      ],
    },
  };
};
