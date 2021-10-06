import React from 'react';
import { Link } from 'react-router-dom';
import { Goal } from '../../Types';
import Subtitle from '../Texts/Subtitle';
import GoalItem from './GoalItem';

function ProjectGoals({
  className,
  upcomingGoals,
  noDateGoals,
  onExpand,
  noTitles,
}: {
  className?: string;
  upcomingGoals: Goal[];
  noDateGoals: Goal[];
  onExpand?: string;
  noTitles?: boolean;
}): JSX.Element {
  return (
    <div
      className={`bg-gray-50 w-screen h-full rounded-t-3xl shadow-top-lg
    flex flex-col ${className}`}
    >
      {onExpand ? (
        <Link
          className="text-gray-400 font-light italic underline
                   self-center mt-6 my-4"
          to={onExpand}
        >
          Expand
        </Link>
      ) : (
        <div className="my-4" />
      )}
      <div className="overflow-y-scroll flex-shrink flex-grow-0 min-h-0">
        {!noTitles && (
          <Subtitle txt="Upcoming" className="font-bold pl-6 mb-2 mt-5" />
        )}
        {upcomingGoals.map((g: Goal) => (
          <GoalItem
            goal={g}
            className="border-solid border-b-2
                       border-opacity-20 border-blue-dark"
            showDate
            key={`up-${g.id}`}
          />
        ))}
        {!noTitles && (
          <Subtitle txt="No date" className="font-bold pl-6 mb-2 mt-10" />
        )}
        {noDateGoals.map((g: Goal) => (
          <GoalItem
            goal={g}
            className="border-solid border-b-2
                       border-opacity-20 border-blue-dark"
            key={`nd-${g.id}`}
          />
        ))}
      </div>
    </div>
  );
}

ProjectGoals.defaultProps = {
  className: '',
  onExpand: '',
  noTitles: false,
};

export default ProjectGoals;
