import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import baseConfigs from "./_base.js";
import baseCommonjsConfig from "./base/commonjs.js";
import baseModuleConfig from "./base/module.js";
import nodePluginCommonjsConfigs from "./node/commonjs.js";
import nodePluginModuleConfigs from "./node/module.js";
import importPluginBaseConfigs from "./plugins/import/import-base.js";
import importPluginCommonjsConfig from "./plugins/import/import-commonjs.js";
import importPluginModuleConfig from "./plugins/import/import-module.js";

export default (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);

  const compat = new FlatCompat({
    baseDirectory: __dirname,
  });

  const nodeCommonjs = [
    ...baseConfigs,
    baseCommonjsConfig,
    ...importPluginBaseConfigs(compat),
    importPluginCommonjsConfig,
    ...nodePluginCommonjsConfigs,

    {
      files: ["**/*.mjs"],
      ...baseModuleConfig,
    },
    {
      files: ["**/*.mjs"],
      ...importPluginModuleConfig,
    },
    ...nodePluginModuleConfigs.map((config) => ({
      ...config,
      files: ["**/*.mjs"],
    })),
  ];

  const nodeModule = [
    ...baseConfigs,
    baseModuleConfig,
    ...importPluginBaseConfigs(compat),
    importPluginModuleConfig,
    ...nodePluginModuleConfigs,
    {
      files: ["**/*.cjs"],
      ...baseCommonjsConfig,
    },
    {
      files: ["**/*.cjs"],
      ...importPluginCommonjsConfig,
    },
    ...nodePluginCommonjsConfigs.map((config) => ({
      ...config,
      files: ["**/*.cjs"],
    })),
  ];

  return {
    compat,
    configs: {
      nodeModule,
      nodeCommonjs,
    },
  };
};
