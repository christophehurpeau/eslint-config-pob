import pobConfig, { apply } from "@pob/eslint-config";
// eslint-disable-next-line import/no-unresolved -- missing exports support see https://gist.github.com/danielweck/cd63af8e9a8b3492abacc312af9f28fd for potential fix
import tseslint from "typescript-eslint";
import allowUnsafeConfig from "./overrides/allow-unsafe.js";
import appConfig from "./overrides/app.js";
import testConfig from "./overrides/test.js";
import importPluginOverrideConfig from "./plugins/import.js";
import nodePluginOverrideConfig from "./plugins/node.js";
import replaceEslintConfig from "./plugins/typescript-eslint/typescript-eslint-replace-eslint.js";
import replaceUnicornConfig from "./plugins/typescript-eslint/typescript-eslint-replace-unicorn.js";
import rules from "./plugins/typescript-eslint/typescript-eslint-rules.js";
import baseConfig from "./rules/base.js";
import nodeConfig from "./rules/node.js";

export { apply } from "@pob/eslint-config";

export const extensions = "{ts,cts,mts,tsx}";

export default (url) => {
  const { configs, compat } = pobConfig(url);
  const testFiles = [
    `**/*.test${extensions}`,
    `**/__tests__/**/*.${extensions}`,
    `**/__mocks__/**/*.${extensions}`,
  ];

  return {
    compat,
    configs: {
      base: [
        ...configs.baseModule,
        importPluginOverrideConfig,
        ...apply({
          files: [`**/*.${extensions}`],
          filesOverridesIf: [tseslint.configs.strictTypeChecked[1].files],
          configs: [
            ...tseslint.configs.strictTypeChecked,
            replaceUnicornConfig,
            replaceEslintConfig,
            rules,
            baseConfig,
          ],
        }),
        ...apply({
          files: testFiles,
          configs: [testConfig],
        }),
      ],
      node: [
        ...configs.nodeModule,
        importPluginOverrideConfig,
        ...apply({
          files: [`**/*.${extensions}`],
          filesOverridesIf: [tseslint.configs.strictTypeChecked[1].files],
          configs: [
            ...tseslint.configs.strictTypeChecked,
            replaceUnicornConfig,
            replaceEslintConfig,
            rules,
            baseConfig,
            nodeConfig,
            nodePluginOverrideConfig,
          ],
        }),
        ...apply({
          files: testFiles,
          configs: [testConfig],
        }),
      ],

      allowUnsafe: apply({
        files: [`**/*.${extensions}`],
        configs: [allowUnsafeConfig],
      }),

      app: apply({
        files: [`**/*.${extensions}`],
        configs: [appConfig],
      }),
    },
  };
};
