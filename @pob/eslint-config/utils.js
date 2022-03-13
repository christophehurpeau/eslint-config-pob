'use strict';

const isVSCode =
  process.argv &&
  process.argv.some((argv) => argv.includes('dbaeumer.vscode-eslint'));

exports.enableIfVSCode = (ruleLevel) => (isVSCode ? ruleLevel : 'off');
