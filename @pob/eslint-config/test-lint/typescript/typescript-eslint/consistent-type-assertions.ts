interface T {
  foo: number;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const x = { foo: 1 } as T;
export const x2: T = { foo: 1 };

export function bar(): T {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return { foo: 1 } as T;
}
