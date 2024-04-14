/* eslint-disable no-undef */

switch (foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
    break;

  default:
  // do nothing
}

switch (foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
    break;

  // no default
}

switch (foo) {
  case 1:
    doSomething();
    break;

  case 2:
    doSomething();
    break;

  // missing default
}
