/* eslint-disable complexity */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";
import { FlatCompat } from "@eslint/eslintrc";
import baseConfigs from "./_base.js";
import baseCommonjsConfig from "./base/commonjs.js";
import baseModuleConfig from "./base/module.js";
import nodePluginCommonjsConfigs from "./node/commonjs.js";
import nodePluginModuleConfigs from "./node/module.js";
import testConfig from "./overrides/test.js";
import importPluginBaseConfigs from "./plugins/import/import-base.js";
import importPluginCommonjsConfig from "./plugins/import/import-commonjs.js";
import importPluginModuleConfig from "./plugins/import/import-module.js";

export const apply = ({
  filesOverridesIf = [],
  extensions = "{js,cjs,mjs}",
  files = [`**/*.${extensions}`],
  configs,
  mode = "throw-if-files-exists",
}) => {
  return configs.map((config) => {
    switch (mode) {
      case "throw-if-files-exists": {
        if (config.files) {
          if (
            !filesOverridesIf.some((filesOverrides) =>
              isDeepStrictEqual(filesOverrides, config.files),
            )
          ) {
            console.log({ filesOverridesIf });
            throw new Error(
              `"files" already exists: ${JSON.stringify(config.files)} for ${config.name ? `"${config.name}"` : JSON.stringify(config)}`,
            );
          }
        }

        return {
          ...config,
          files,
        };
      }
      case "keep-extension": {
        if (files.length !== 1) {
          throw new Error(
            `apply: "files" should have only one element: ${files}`,
          );
        }
        if (!files[0].startsWith("**/")) {
          throw new Error(`apply: "files" should start with "**/": ${files}`);
        }

        return {
          ...config,
          files: config.files.map((filesGlob) => {
            if (!filesGlob.startsWith("**/")) {
              throw new Error(
                `"files" should start with "**/": ${config.files} for ${config.name ? `"${config.name}"` : JSON.stringify(config)}`,
              );
            }
            return files[0] + filesGlob.slice(3);
          }),
        };
      }
      case "directory": {
        if (files.length !== 1) {
          throw new Error(
            `apply: "files" should have only one element: ${files}`,
          );
        }
        return {
          ...config,
          files: config.files
            ? config.files.map((fileGlob) => files[0] + fileGlob)
            : [`${files[0]}**/*.${extensions}`],
        };
      }

      default:
        throw new Error('apply: "mode" is invalid');
    }
  });
};

export default (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);
  const extensions = "{js,cjs,mjs}";

  const testFiles = [
    `**/*.test${extensions}`,
    `**/__tests__/**/*.${extensions}`,
    `**/__mocks__/**/*.${extensions}`,
  ];

  const compat = new FlatCompat({
    baseDirectory: __dirname,
  });

  const nodeCommonjs = [
    ...baseConfigs,
    baseCommonjsConfig,
    ...importPluginBaseConfigs,
    importPluginCommonjsConfig,
    ...nodePluginCommonjsConfigs,

    ...apply({
      files: ["**/*.mjs"],
      configs: [
        baseModuleConfig,
        importPluginModuleConfig,
        ...nodePluginModuleConfigs,
      ],
    }),

    ...apply({
      files: testFiles,
      configs: [testConfig],
    }),
  ];

  const baseModule = [
    ...baseConfigs,
    baseModuleConfig,
    ...importPluginBaseConfigs,
    importPluginModuleConfig,

    ...apply({
      files: ["**/*.cjs"],
      configs: [baseCommonjsConfig, importPluginCommonjsConfig],
    }),

    ...apply({
      files: testFiles,
      configs: [testConfig],
    }),
  ];

  const nodeModule = [
    ...baseModule,
    ...nodePluginModuleConfigs,

    ...apply({
      files: ["**/*.cjs"],
      configs: [...nodePluginCommonjsConfigs],
    }),
  ];

  return {
    compat,
    configs: {
      baseModule,
      nodeModule,
      nodeCommonjs,
    },
  };
};
