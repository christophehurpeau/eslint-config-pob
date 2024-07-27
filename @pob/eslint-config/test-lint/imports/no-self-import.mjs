// eslint-disable-next-line import/no-self-import
import { foo as bar } from "./no-self-import.mjs";

export const foo = "foo";
export const baz = `baz${bar}`;
