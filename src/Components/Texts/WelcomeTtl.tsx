import React from 'react';

function WelcomeTtl({
  name,
  className,
}: {
  name: string;
  className?: string;
}): JSX.Element {
  return (
    <div className={`text-2xl text-blue ${className}`}>
      Welcome back, <b>{name}</b>
    </div>
  );
}

WelcomeTtl.defaultProps = {
  className: '',
};

export default WelcomeTtl;
