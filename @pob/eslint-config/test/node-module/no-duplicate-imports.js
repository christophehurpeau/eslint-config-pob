/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable unicorn/prefer-node-protocol */

// eslint-disable-next-line import/no-duplicates
import { merge } from 'module';
import something from 'another-module';
// eslint-disable-next-line import/no-duplicates
import { find } from 'module';

export const a = () => {
  merge();
  something();
  find();
};
