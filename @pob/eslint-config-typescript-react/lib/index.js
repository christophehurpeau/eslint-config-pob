import baseTypescriptPobConfig, {
  extensions,
} from "@pob/eslint-config-typescript";
import pobPlugin from "@pob/eslint-plugin";
import jsxA11yConfigs from "./plugins/jsx-a11y.js";
import reactHooksConfigs from "./plugins/react-hooks.js";
import reactConfigs from "./plugins/react.js";

export default (url) => {
  const { compat, configs } = baseTypescriptPobConfig(url);

  const recommended = [
    ...configs.node,
    ...[
      pobPlugin.configs.react,
      ...compat.config({
        settings: {
          "import/resolver": {
            node: {
              extensions: [
                ".mjs",
                ".js",
                ".json",
                ".ts",
                ".tsx",
                ".d.ts",
                ".d.tsx",
              ],
            },
          },
        },
        rules: {
          "import/extensions": [
            "error",
            "ignorePackages",
            {
              js: "ignorePackages",
              cjs: "ignorePackages",
              mjs: "ignorePackages",
              cts: "ignorePackages",
              mts: "ignorePackages",
              ts: "never",
              tsx: "never",
            },
          ],
          "react/jsx-filename-extension": ["error", { extensions: ["tsx"] }],
        },
      }),
      ...reactConfigs(compat),
      ...reactHooksConfigs(compat),
      ...jsxA11yConfigs(compat),
    ].map((config) => ({
      ...config,
      files: [`**/*.${extensions}`],
    })),
  ];
  return {
    compat,
    configs: {
      recommended,

      allowUnsafe: configs.allowUnsafe,
      app: configs.app,

      "react-native": [
        ...recommended,
        ...compat.config({
          settings: {
            "import/resolver": {
              node: {
                extensions: [".js", ".ios.js", ".android.js"],
              },
            },
          },
        }),
      ],

      "react-native-web": [
        ...recommended,
        ...compat.config({
          settings: {
            "import/resolver": {
              node: {
                extensions: [".js", ".web.js"],
              },
            },
          },
          rules: {
            "import/no-unresolved": [
              "error",
              {
                ignore: [
                  // allow react-native as it is replaced by react-native-web and typed by @types/react-native. react-native lib does not need to be installed in that case
                  "react-native",
                ],
              },
            ],
          },
        }),
      ],
    },
  };
};
