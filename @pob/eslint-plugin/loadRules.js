"use strict";

const fs = require("node:fs");
const path = require("node:path");
const pkg = require("./package.json");

const repoUrl = "https://github.com/christophehurpeau/eslint-config-pob";
const packagePath = "@pob/eslint-plugin";

const getDocumentationUrl = (filename) => {
  const ruleName = path.basename(filename, ".js");
  return `${repoUrl}/blob/v${pkg.version}/${packagePath}/docs/rules/${ruleName}.md`;
};

function loadRule(ruleId) {
  // eslint-disable-next-line import/no-dynamic-require
  const rule = require(path.resolve(__dirname, `./rules/${ruleId}`));

  return {
    meta: {
      schema: [],
      ...rule.meta,
      docs: {
        ...rule.meta.docs,
        url: getDocumentationUrl(ruleId),
      },
    },
    create: rule.create,
  };
}

module.exports = function loadRules() {
  return Object.fromEntries(
    fs
      .readdirSync(path.resolve(__dirname, "./rules"), { withFileTypes: true })
      .filter((file) => file.isFile() && !file.name.endsWith(".test.js"))
      .map((file) => {
        const ruleId = path.basename(file.name, ".js");
        return [ruleId, loadRule(ruleId)];
      }),
  );
};
