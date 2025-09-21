import { createNodeResolver } from "eslint-plugin-import-x";

export default {
  name: "@pob/eslint-config-typescript/app",
  settings: {
    "import-x/resolver-next": [
      createNodeResolver({
        // @ts-expect-error missing types
        moduleDirectory: ["node_modules", "src"],
      }),
    ],
  },
  rules: {
    /* No need for this rule in an app */
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
