import React from 'react';
import type { Goal } from '../../Types';
import GoalItem from './GoalItem';

function DetailedGoals({
  className,
  goals,
  onDelete,
}: {
  className?: string;
  goals: Goal[];
  onDelete?: undefined | ((id: string) => void);
}): JSX.Element {
  return (
    <div className={`${className}`}>
      {goals.map((g) => (
        <GoalItem
          goal={g}
          className="mb-2"
          noEdit={g.finished}
          key={g.id}
          onDelete={() => {
            if (onDelete) onDelete(g.id);
          }}
        />
      ))}
    </div>
  );
}

DetailedGoals.defaultProps = {
  className: '',
  onDelete: undefined,
};

export default DetailedGoals;
