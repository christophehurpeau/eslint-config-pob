'use strict';

module.exports = {
  extends: ['./node-commonjs', './rules/dev-only'].map(require.resolve),
};
