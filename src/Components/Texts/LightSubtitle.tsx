import React from 'react';

function LightSubtitle({
  txt,
  className,
}: {
  txt: string;
  className?: string;
}): JSX.Element {
  return <h2 className={`text-xl text-blue font-light ${className}`}>{txt}</h2>;
}

LightSubtitle.defaultProps = {
  className: '',
};

export default LightSubtitle;
