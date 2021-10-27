import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { FiFeather } from 'react-icons/fi';
import type { Goal } from '../../Types';
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
          Open Goals
        </Link>
      ) : (
        <div className="my-4" />
      )}

      {upcomingGoals.length > 0 || noDateGoals.length > 0 ? (
        <div
          className="overflow-y-scroll flex-shrink flex-grow-0
                    min-h-0 h-full"
        >
          {!noTitles && upcomingGoals.length > 0 && (
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
          {!noTitles && upcomingGoals.length > 0 && (
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
      ) : (
        <div
          className="overflow-y-scroll flex-shrink flex-grow-0 min-h-0
                    h-full flex flex-col items-center place-content-center"
        >
          <IconContext.Provider
            value={{ className: 'w-16 h-16 mb-8 stroke-dark opacity-60' }}
          >
            <FiFeather />
          </IconContext.Provider>
          <Subtitle txt="You have no goals" className="opacity-60" />
        </div>
      )}
    </div>
  );
}

ProjectGoals.defaultProps = {
  className: '',
  onExpand: '',
  noTitles: false,
};

export default ProjectGoals;
