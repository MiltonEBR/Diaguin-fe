import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import type { Goal } from '../../Types';

function GoalItem({
  goal,
  className,
  noEdit,
  onDelete,
}: {
  goal: Goal;
  className?: string;
  noEdit?: boolean;
  onDelete?: undefined | (() => void);
}): JSX.Element {
  return (
    <div
      className={`w-full py-3 px-7 flex flex-col content-center
              bg-gray-50 rounded-full shadow-md ${className}`}
    >
      <div className="flex flex-row items-start">
        <p className="font-semibold text-blue text-xl mr-3">
          {goal.description}
        </p>
        <div className="ml-auto">
          {!noEdit && (
            <button type="button" className="mr-3">
              <IconContext.Provider value={{ className: 'fill-dark h-7 w-7' }}>
                <AiOutlineEdit />
              </IconContext.Provider>
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              if (onDelete) onDelete();
            }}
          >
            <IconContext.Provider value={{ className: 'fill-dark h-7 w-7' }}>
              <BsTrash />
            </IconContext.Provider>
          </button>
        </div>
      </div>

      {goal.nextDate ? (
        // TODO: Show the appropiate date
        <p className="font-light text-blue text-base">
          Next due: {goal.nextDate}
        </p>
      ) : null}
    </div>
  );
}

GoalItem.defaultProps = {
  className: '',
  noEdit: false,
  onDelete: undefined,
};

export default GoalItem;
