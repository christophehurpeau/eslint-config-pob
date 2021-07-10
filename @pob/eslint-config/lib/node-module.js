'use strict';

module.exports = {
  extends: ['./base', './node/module'].map(require.resolve),
};
