import React from 'react';

function Title({ text }: { text: string }): JSX.Element {
  return <h3 className="text-blue text-lg font-bold mb-5">{text}</h3>;
}

export default Title;
