import React from 'react';
import { Goal } from '../../Types';
import GoalItem from './GoalItem';

function PreviewList({
  className,
  goals,
}: {
  className?: string;
  goals: Goal[];
}): JSX.Element {
  return (
    <div
      className={`bg-gray-50 w-screen h-full rounded-t-3xl shadow-top-lg
    flex flex-col items-stretch ${className}`}
    >
      <button
        type="button"
        className="text-gray-400 font-light italic underline self-center mt-6"
      >
        Expand
      </button>
      {goals.map((g: Goal) => (
        <GoalItem
          goal={g}
          className="border-solid border-b-2 border-opacity-20 border-blue-dark"
        />
      ))}
    </div>
  );
}

PreviewList.defaultProps = {
  className: '',
};

export default PreviewList;
