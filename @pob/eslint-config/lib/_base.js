import js from "@eslint/js";
import pobPlugin from "@pob/eslint-plugin";
import regexpPluginConfigs from "./plugins/regexp.js";
import unicornPluginConfigs from "./plugins/unicorn.js";
import bestPracticesConfig from "./rules/best-practices.js";
import codeQualityConfig from "./rules/code-quality.js";
import devOnlyConfig from "./rules/dev-only.js";
import errorsConfig from "./rules/errors.js";
import styleConfig from "./rules/style.js";

export default [
  {
    linterOptions: {
      // todo noInlineConfig: true,
      reportUnusedDisableDirectives: "error",
    },
    plugins: {
      "@pob": pobPlugin,
    },
  },
  {
    ignores: [
      ".yarn",
      "**/dist/",
      "**/build/",
      "**/coverage/",
      "**/.next/",
      "**/.tamagui/",
      "**/*.d.ts",
    ],
  },
  js.configs.recommended,
  pobPlugin.configs.base,
  ...unicornPluginConfigs,
  ...regexpPluginConfigs,
  bestPracticesConfig,
  codeQualityConfig,
  errorsConfig,
  styleConfig,
  devOnlyConfig,

  // TODO
  // {
  //   files: ["*.json"],
  //   languageOptions: {
  //     parser: jsoncParser,
  //   },
  //   rules: {},
  // },
];
