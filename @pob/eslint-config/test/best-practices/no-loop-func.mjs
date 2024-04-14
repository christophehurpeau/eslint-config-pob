// eslint-disable-next-line vars-on-top, no-var
for (var i = 10; i; i--) {
  (function () {
    return i;
  })();
}

// eslint-disable-next-line vars-on-top, no-var, no-redeclare, block-scoped-var
var i = 0;
do {
  // eslint-disable-next-line no-inner-declarations
  function a() {
    // eslint-disable-next-line block-scoped-var
    return i;
  }
  a();

  // eslint-disable-next-line block-scoped-var
  i++;
  // eslint-disable-next-line block-scoped-var
} while (i < 5);
