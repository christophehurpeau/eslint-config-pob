import json from "@eslint/json";

export default [
  { plugins: { json } },

  // lint JSON files
  {
    files: ["**/*.json"],
    language: "json/json",
    // @ts-ignore
    ...json.configs.recommended,
  },

  // lint JSONC files
  {
    files: ["**/*.jsonc", "**/tsconfig.json", ".vscode/*.json"],
    language: "json/jsonc",
    languageOptions: {
      allowTrailingCommas: true,
    },
    // @ts-ignore
    ...json.configs.recommended,
  },

  // lint JSON5 files
  {
    files: ["**/*.json5"],
    language: "json/json5",
    // @ts-ignore
    ...json.configs.recommended,
  },
];
