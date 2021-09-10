import React from 'react';

function Text({
  curr,
  max,
  className,
}: {
  curr: number;
  max: number;
  className?: string;
}): JSX.Element {
  return (
    <p className={`text-blue font-light text-xl ${className}`}>
      {curr}/{max} Goals
    </p>
  );
}

Text.defaultProps = {
  className: '',
};

export default Text;
