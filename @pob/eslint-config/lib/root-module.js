'use strict';

module.exports = {
  extends: ['./node-module', './dev-only'].map(require.resolve),
};
