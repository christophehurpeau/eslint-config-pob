// eslint-disable-next-line @pob/react-named-import
import * as React from "react";

interface FooProps {
  foo?: string;
}

// eslint-disable-next-line react/prefer-stateless-function
export class Foo extends React.Component<FooProps> {
  render(): React.ReactNode {
    // eslint-disable-next-line react/prop-types
    const { foo } = this.props;

    if (!foo) {
      return null;
    }

    return <div>{foo}</div>;
  }
}
