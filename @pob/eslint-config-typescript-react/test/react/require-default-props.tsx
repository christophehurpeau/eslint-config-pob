import type { ReactElement } from 'react';

interface Props {
  foo: string;
  bar?: string;
}

export function MyStatelessComponent({
  foo = 'default',
  bar,
}: Props): ReactElement {
  return (
    <div>
      Hello {foo} {bar}
    </div>
  );
}
