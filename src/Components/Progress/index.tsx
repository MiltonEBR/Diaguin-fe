import React from 'react';
import Bar from './Bar';
import Text from './Text';

function Progress({
  curr,
  max,
  className,
}: {
  curr: number;
  max: number;
  className?: string;
}): JSX.Element {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Bar curr={curr} max={max} className="mb-4" />
      <Text curr={curr} max={max} />
    </div>
  );
}

Progress.defaultProps = {
  className: '',
};

export default Progress;
