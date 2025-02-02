import baseConfigs from "./_base.js";
import baseCommonjsConfig from "./base/commonjs.js";
import baseModuleConfig from "./base/module.js";
import nodePluginCommonjsConfigs from "./node/commonjs.js";
import nodePluginModuleConfigs from "./node/module.js";
import scriptsOverrideConfig from "./overrides/scripts.js";
import testOverrideConfig from "./overrides/test.js";
import importPluginBaseConfigs from "./plugins/import/import-base.js";
import importPluginCommonjsConfig from "./plugins/import/import-commonjs.js";
import importPluginModuleConfig from "./plugins/import/import-module.js";
import { apply } from "./utils/apply.js";

export { apply } from "./utils/apply.js";

export default () => {
  const extensions = "{js,cjs,mjs}";

  const testFiles = [
    `**/*.test${extensions}`,
    `**/__tests__/**/*.${extensions}`,
    `**/__mocks__/**/*.${extensions}`,
  ];

  const nodeCommonjs = [
    ...baseConfigs,
    ...apply({
      mode: "keep-files-if-exists",
      files: ["**/*.{js,cjs,mjs,mts,ts,tsx,cts}"],
      configs: [
        baseCommonjsConfig,
        ...importPluginBaseConfigs,
        importPluginCommonjsConfig,
        ...nodePluginCommonjsConfigs,
      ],
    }),

    ...apply({
      extensions,
      mode: "directory",
      files: ["**/scripts/"],
      configs: [scriptsOverrideConfig],
    }),

    ...apply({
      files: ["**/*.{mjs,mts}"],
      mode: "keep-files-if-exists",
      configs: [
        baseModuleConfig,
        importPluginModuleConfig,
        ...nodePluginModuleConfigs,
      ],
    }),

    ...apply({
      files: testFiles,
      configs: [testOverrideConfig],
    }),
  ];

  const baseModule = [
    ...baseConfigs,
    ...apply({
      mode: "keep-files-if-exists",
      files: ["**/*.{js,mjs,cjs,mts,ts,tsx,cts}"],
      configs: [
        baseModuleConfig,
        ...importPluginBaseConfigs,
        importPluginModuleConfig,
      ],
    }),

    ...apply({
      mode: "keep-files-if-exists",
      files: ["**/*.{cjs,cts}"],
      configs: [baseCommonjsConfig, importPluginCommonjsConfig],
    }),

    ...apply({
      files: testFiles,
      configs: [testOverrideConfig],
    }),
  ];

  const nodeModule = [
    ...baseModule,
    ...apply({
      mode: "keep-files-if-exists",
      files: ["**/*.{js,mjs,mts,ts,tsx}"],
      configs: [...nodePluginModuleConfigs],
    }),

    ...apply({
      extensions,
      mode: "directory",
      files: ["**/scripts/"],
      configs: [scriptsOverrideConfig],
    }),

    ...apply({
      mode: "keep-files-if-exists",
      files: ["**/*.{cjs,cts}"],
      configs: [...nodePluginCommonjsConfigs],
    }),
  ];

  return {
    configs: {
      baseModule,
      nodeModule,
      nodeCommonjs,
    },
  };
};
