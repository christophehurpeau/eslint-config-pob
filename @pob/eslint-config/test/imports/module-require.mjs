import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// eslint-disable-next-line import/no-commonjs -- todo this should be fixed
export default require('./no-dynamic-require.cjs');
