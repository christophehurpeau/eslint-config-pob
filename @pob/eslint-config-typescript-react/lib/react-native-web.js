"use strict";

module.exports = {
  extends: ["./react-native"].map(require.resolve),

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
};
