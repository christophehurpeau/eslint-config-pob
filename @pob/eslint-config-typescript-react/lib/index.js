import baseTypescriptPobConfig, {
  extensions,
} from "@pob/eslint-config-typescript";
import pobPlugin from "@pob/eslint-plugin";
import { createNodeResolver } from "eslint-plugin-import-x";
import importPluginOverrideConfig from "./plugins/import.js";
import jsxA11yConfigs from "./plugins/jsx-a11y.js";
import reactHooksConfigs from "./plugins/react-hooks.js";
import reactConfigs from "./plugins/react.js";

export { apply, applyTs } from "@pob/eslint-config-typescript";

export default () => {
  const { configs } = baseTypescriptPobConfig();

  const createConfig = (base) => [
    ...base,
    importPluginOverrideConfig,

    ...[
      pobPlugin.configs.react,
      {
        settings: {
          "import-x/resolver-next": [
            createNodeResolver({
              extensions: [
                ".mjs",
                ".js",
                ".json",
                ".ts",
                ".tsx",
                ".d.ts",
                ".d.tsx",
              ],
            }),
          ],
        },
        rules: {
          "import-x/extensions": [
            "error",
            "always",
            {
              ignorePackages: true,
              pattern: {
                js: "always",
                cjs: "always",
                mjs: "always",
                cts: "always",
                mts: "always",
                ts: "never",
                tsx: "never",
              },
            },
          ],
          "react/jsx-filename-extension": ["error", { extensions: ["tsx"] }],
        },
      },
      ...reactConfigs,
      ...reactHooksConfigs,
      ...jsxA11yConfigs,
    ].map((config) => ({
      ...config,
      files: [`**/*.${extensions}`],
    })),
  ];
  return {
    configs: {
      base: createConfig(configs.base),
      node: createConfig(configs.node),

      allowUnsafe: configs.allowUnsafe,
      allowUnsafeAsWarn: configs.allowUnsafeAsWarn,
      allowImplicitReturnType: configs.allowImplicitReturnType,
      app: configs.app,

      "react-native": [
        {
          settings: {
            "import-x/resolver-next": [
              createNodeResolver({
                extensions: [".js", ".ios.js", ".android.js"],
                conditionNames: ["import", "react-native"],
              }),
            ],
          },
        },
      ],

      "react-native-web": [
        {
          settings: {
            "import-x/resolver-next": [
              createNodeResolver({
                extensions: [".js", ".web.js"],
                conditionNames: ["import", "browser"],
              }),
            ],
          },
          rules: {
            "import-x/no-unresolved": [
              "error",
              {
                ignore: [
                  // allow react-native as it is replaced by react-native-web and typed by @types/react-native. react-native lib does not need to be installed in that case
                  "react-native",
                ],
              },
            ],
          },
        },
      ],
    },
  };
};
