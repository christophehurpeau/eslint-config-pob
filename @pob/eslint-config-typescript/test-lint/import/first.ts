import "./foo.ts";
import "./folder-with-index/index.ts";

const initWith = function (): void {
  console.log("init");
};

initWith();

// eslint-disable-next-line import/first
import "./export.ts";
