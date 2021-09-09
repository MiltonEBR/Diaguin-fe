import React from 'react';
import { CardProps, CardsList } from '../../Types';
import SingleCard from './SingleCard';

function Cards({
  className,
  list,
}: {
  className?: string;
  list: CardsList;
}): JSX.Element {
  return (
    <div
      className={`flex flex-row overflow-x-scroll
                  w-screen pl-6 pb-10 ${className}`}
    >
      {list.map(({ ttl, description }: CardProps) => (
        <SingleCard ttl={ttl} description={description} />
      ))}
    </div>
  );
}

Cards.defaultProps = {
  className: '',
};

export default Cards;
