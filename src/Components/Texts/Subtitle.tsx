import React from 'react';

function Subtitle({ txt }: { txt: string }): JSX.Element {
  return <h2 className="text-2xl text-blue font-bold mb-7">{txt}</h2>;
}

export default Subtitle;