import "./foo";
import "./folder-with-index";

const initWith = function (): void {
  console.log("init");
};

initWith();

// eslint-disable-next-line import/first
import "./export";