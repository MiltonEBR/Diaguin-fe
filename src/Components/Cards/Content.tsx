import React from 'react';

function Content({ text }: { text: string }): JSX.Element {
  return <p className="w-full flex-grow text-blue font-light">{text}</p>;
}

export default Content;
