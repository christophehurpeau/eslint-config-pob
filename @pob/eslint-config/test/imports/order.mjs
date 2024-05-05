// 2.sibling
// eslint-disable-next-line import/order
import { foo } from "./foo.mjs";

// 1. node "builtin" modules
// eslint-disable-next-line import/order
import fs from "node:fs";

fs.readFile(foo, "utf8");
