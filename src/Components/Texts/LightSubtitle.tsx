import React from 'react';

function Subtitle({ txt }: { txt: string }): JSX.Element {
  return <h2 className="text-xl text-blue font-light">{txt}</h2>;
}

export default Subtitle;
