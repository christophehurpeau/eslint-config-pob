for (let i = 10; i; i--) {
  (function () {
    return i;
  })();
}

let i = 0;
do {
  // eslint-disable-next-line no-loop-func, no-inner-declarations
  function a() {
    return i;
  }
  a();

  i++;
} while (i < 5);
