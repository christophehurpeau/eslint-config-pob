'use strict';

module.exports = {
  extends: ['./base', './plugins/import/import-module', './node/module'].map(
    require.resolve,
  ),
};
