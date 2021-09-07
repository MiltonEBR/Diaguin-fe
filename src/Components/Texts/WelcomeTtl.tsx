import React from 'react';

function WelcomeTtl({ name }: { name: string }): JSX.Element {
  return (
    <div className="text-2xl text-blue-dark">
      Welcome back, <b>{name}</b>
    </div>
  );
}

export default WelcomeTtl;
