import React from 'react';
import { useHistory } from 'react-router';
import { Project } from '../../Types';
import SingleCard from './SingleCard';

function Cards({
  className,
  list,
}: {
  className?: string;
  list: Project[];
}): JSX.Element {
  const history = useHistory();

  return (
    <div
      className={`flex flex-row overflow-x-auto
                  w-screen pl-6 pb-10 ${className}`}
    >
      {list.map(({ name, id, goalCount, finishedGoals }: Project) => (
        <SingleCard
          ttl={name}
          description={`${finishedGoals}/${goalCount} goals finished`}
          onClick={() => {
            history.push(`/project/${id}`);
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
