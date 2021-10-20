import React from 'react';
import { Goal } from '../../Types';
import GoalItem from './GoalItem';

function DetailedGoals({
  className,
  goals,
}: {
  className?: string;
  goals: Goal[];
}): JSX.Element {
  return (
    <div className={`${className}`}>
      {goals.map((g) => (
        <GoalItem goal={g} className="mb-2" noEdit={g.finished} key={g.id} />
      ))}
    </div>
  );
}

DetailedGoals.defaultProps = {
  className: '',
};

export default DetailedGoals;
