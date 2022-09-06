export function TestJsxCurlyBracePresence() {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <div>{"Hello 'world'"}</div>
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <div>{'Hello "world"'}</div>

      <div>Hello 'world'</div>
      <div>Hello "world"</div>
      <div>{'>'}</div>
      <div>{'<'}</div>
      <div>{'}'}</div>
      <div>{'{'}</div>
    </>
  );
}
