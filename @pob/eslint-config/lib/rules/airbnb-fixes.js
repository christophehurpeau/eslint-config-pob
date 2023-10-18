'use strict';

module.exports = {
  rules: {
    // TODO[eslint-config-airbnb-base@>=16.0.0]: Remove this rule ; see https://github.com/airbnb/javascript/pull/2721
    'no-restricted-exports': [
      'error',
      {
        restrictDefaultExports: {
          direct: false, // permits `export default` declarations
          named: true, // restricts `export { foo as default };` declarations
          defaultFrom: false, // permits `export { default } from 'foo';` declarations
          namedFrom: false, // permits `export { foo as default } from 'foo';` declarations
          namespaceFrom: true, // restricts `export * as default from 'foo';` declarations
        },
        restrictedNamedExports: [
          'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
        ],
      },
    ],
  },
};
