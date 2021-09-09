import React from 'react';

function Subtitle({
  txt,
  className,
}: {
  txt: string;
  className?: string;
}): JSX.Element {
  return (
    <h2 className={`text-2xl text-blue ${className || 'font-bold'}`}>{txt}</h2>
  );
}

Subtitle.defaultProps = {
  className: '',
};

export default Subtitle;
