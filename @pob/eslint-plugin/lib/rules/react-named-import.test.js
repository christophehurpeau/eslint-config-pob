import { join } from "node:path";
import rule from "./react-named-import.js";
import { RuleTester } from "./test-utils/RuleTester.js";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: join(import.meta.dirname, "../fixtures"),
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
