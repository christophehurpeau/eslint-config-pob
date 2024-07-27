"use strict";

const baseConfig = require("./configs/base");
const reactConfig = require("./configs/react");
const loadRules = require("./loadRules");

module.exports = {
  rules: {
    ...loadRules(),
  },
  configs: {
    base: baseConfig,
    react: reactConfig,
  },
};
