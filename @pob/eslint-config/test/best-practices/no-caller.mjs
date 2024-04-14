export function foo() {
  // eslint-disable-next-line no-caller, no-restricted-properties
  const callee = arguments.callee;
  console.log(callee);
}
