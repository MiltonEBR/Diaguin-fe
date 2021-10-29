import React from 'react';
import { useHistory } from 'react-router';
import type { Project } from '../../Types';
import CreateCard from './CreateCard';
import SingleCard from './SingleCard';

type List = Project & { finishedGoals: number };

function Cards({
  className,
  list,
  onCreate,
}: {
  className?: string;
  list: List[];
  onCreate: () => void;
}): JSX.Element {
  const history = useHistory();

  return (
    <div
      className={`flex flex-row overflow-x-auto
                  w-screen pl-6 pb-10 ${className}`}
    >
      {list.map(({ name, id, goalCount, goalsId, finishedGoals }) => {
        const description = [];
        if (goalCount > 0)
          description.push(`${finishedGoals}/${goalCount} goals finished`);
        if (goalsId.length - goalCount > 0)
          description.push(`${goalsId.length - goalCount} repeating goals`);
        return (
          <SingleCard
            ttl={name}
            description={description.length > 0 ? description : 'No goals yet'}
            onClick={() => {
              history.push(`/project/${id}`);
            }}
            key={`proj-${id}`}
          />
        );
      })}
      <CreateCard onClick={onCreate} />
    </div>
  );
}

Cards.defaultProps = {
  className: '',
};

export default Cards;
