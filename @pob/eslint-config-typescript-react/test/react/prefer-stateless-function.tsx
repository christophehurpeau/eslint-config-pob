import * as React from 'react';

interface FooProps {
  foo?: string;
}

// eslint-disable-next-line react/prefer-stateless-function
export class Foo extends React.Component<FooProps> {
  render(): React.ReactNode {
    if (!this.props.foo) {
      return null;
    }

    return <div>{this.props.foo}</div>;
  }
}
