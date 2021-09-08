import React from 'react';
import SingleCard from './SingleCard';

function Cards(): JSX.Element {
  // Cards should be generated automatically
  return (
    <div
      className="flex flex-row overflow-x-scroll
                  w-screen pl-6 pb-10"
    >
      <SingleCard ttl="Learn Python" description="Some placeholder text" />
      <SingleCard ttl="Learn Python" description="Some placeholder text" />
    </div>
  );
}

export default Cards;
