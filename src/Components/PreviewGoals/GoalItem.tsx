import React from 'react';
import {
  MdCheckBoxOutlineBlank as NoCheck,
  MdCheckBox as Check,
} from 'react-icons/md';
import { RiArrowRightSLine as Arrow } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import type { Goal } from '../../Types';

function GoalItem({
  goal,
  showDate,
  className,
  showArrow,
  onCheck,
  onOpen,
}: {
  goal: Goal;
  showDate?: boolean;
  showArrow?: boolean;
  className?: string;
  onCheck?: () => void;
  onOpen?: (goal: Goal) => void;
}): JSX.Element {
  return (
    <div
      className={`w-full py-4 px-6 flex flex-row content-center ${className}`}
    >
      <button
        type="button"
        className="mr-3"
        onClick={() => {
          if (onCheck) onCheck();
        }}
      >
        <IconContext.Provider value={{ className: 'fill-dark h-7 w-7' }}>
          {goal.finished ? <Check /> : <NoCheck />}
        </IconContext.Provider>
      </button>
      {goal.dates && showDate ? (
        <div className="text-blue mr-3 w-32 relative">
          <p className="font-semibold text-xl">{goal.nextDate}</p>
          {goal.repeat && (
            <p className="font-light text-xs absolute -mt-1">Repeating</p>
          )}
        </div>
      ) : null}
      <p className="font-light text-blue text-lg">{goal.description}</p>
      {showArrow && (
        <button
          type="button"
          className="ml-auto"
          onClick={() => {
            if (onOpen) onOpen(goal);
          }}
        >
          <IconContext.Provider value={{ className: 'fill-dark h-7 w-7' }}>
            <Arrow />
          </IconContext.Provider>
        </button>
      )}
    </div>
  );
}

GoalItem.defaultProps = {
  className: '',
  showDate: false,
  showArrow: false,
  onCheck: undefined,
  onOpen: undefined,
};

export default GoalItem;
