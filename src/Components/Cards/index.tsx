import React from 'react';
import { useHistory } from 'react-router';
import { CardProps, CardsList } from '../../Types';
import SingleCard from './SingleCard';

function Cards({
  className,
  list,
}: {
  className?: string;
  list: CardsList;
}): JSX.Element {
  const history = useHistory();

  return (
    <div
      className={`flex flex-row overflow-x-scroll
                  w-screen pl-6 pb-10 ${className}`}
    >
      {list.map(({ ttl, description }: CardProps) => (
        <SingleCard
          ttl={ttl}
          description={description}
          onClick={() => {
            history.push(`/project/${ttl}`);
          }}
        />
      ))}
    </div>
  );
}

Cards.defaultProps = {
  className: '',
};

export default Cards;
