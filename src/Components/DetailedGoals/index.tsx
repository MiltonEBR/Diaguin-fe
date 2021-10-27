import React from 'react';
import type { Goal } from '../../Types';
import GoalItem from './GoalItem';

function DetailedGoals({
  className,
  goals,
  onDelete,
  onEdit,
}: {
  className?: string;
  goals: Goal[];
  onDelete?: undefined | ((g: Goal) => void);
  onEdit?: undefined | ((g: Goal) => void);
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
            if (onDelete) onDelete(g);
          }}
          onEdit={() => {
            if (onEdit) onEdit(g);
          }}
        />
      ))}
    </div>
  );
}

DetailedGoals.defaultProps = {
  className: '',
  onDelete: undefined,
  onEdit: undefined,
};

export default DetailedGoals;
