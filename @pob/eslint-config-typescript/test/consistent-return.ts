/* incorrect */

function foo(): undefined {}

export function bar(flag: boolean): undefined {
  if (flag) {
    foo();
  }
}

export async function baz(flag: boolean): Promise<undefined> {
  if (flag) return;
  foo();
}

/* correct */

export function foo2(): void {}
export function bar2(flag: boolean): void {
  if (flag) return foo();
  // eslint-disable-next-line no-useless-return
  return;
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export async function baz2(flag: boolean): Promise<number | void> {
  if (flag) return 42;
  // eslint-disable-next-line no-useless-return
  return;
}
