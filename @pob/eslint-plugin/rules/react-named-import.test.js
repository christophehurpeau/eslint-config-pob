"use strict";

const path = require("node:path");
const rule = require("./react-named-import");
const { RuleTester } = require("./test-utils/RuleTester");

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    tsconfigRootDir: path.join(__dirname, "../fixtures"),
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
});
ruleTester.run("react-named-import", rule, {
  valid: [
    {
      code: `
      import type { ReactNode } from 'react';

      export const simpleElement: ReactNode = <p>paragraph</p>;
    `,
    },
  ],
  invalid: [
    {
      code: `
      import React from 'react';

      export const simpleElement: React.ReactNode = <p>paragraph</p>;
    `,
      errors: [
        {
          messageId: "default",
        },
      ],
    },
    {
      code: `
      import * as React from 'react';

      export const simpleElement: React.ReactNode = <p>paragraph</p>;
    `,
      errors: [
        {
          messageId: "namespace",
        },
      ],
    },
    {
      code: `
      import type * as React from 'react';

      export const simpleElement: React.ReactNode = <p>paragraph</p>;
    `,
      errors: [
        {
          messageId: "namespace",
        },
      ],
    },
  ],
});
