'use strict';

module.exports = {
  extends: ['./base', './node/commonjs'].map(require.resolve),
};
