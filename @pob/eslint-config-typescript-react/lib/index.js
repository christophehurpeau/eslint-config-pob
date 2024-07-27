"use strict";

module.exports = {
  extends: [
    "plugin:@pob/react",
    ...["./rules/react", "./rules/react-hooks", "./rules/jsx-a11y"].map(
      require.resolve,
    ),
  ],

  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", ".ts", ".tsx", ".d.ts", ".d.tsx"],
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
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": ["error", { extensions: ["tsx"] }],
  },
};
