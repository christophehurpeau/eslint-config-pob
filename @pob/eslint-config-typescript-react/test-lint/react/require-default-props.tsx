import type { ReactNode } from "react";

interface Props {
  foo: string;
  bar?: string;
}

export function MyStatelessComponent({
  foo = "default",
  bar,
}: Props): ReactNode {
  return (
    <div>
      Hello {foo} {bar}
    </div>
  );
}
