import React from 'react';
import {
  MdCheckBoxOutlineBlank as NoCheck,
  MdCheckBox as Check,
} from 'react-icons/md';
import { RiArrowRightSLine as Arrow } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { Goal } from '../../Types';

function GoalItem({
  goal,
  showDate,
  className,
  showArrow,
}: {
  goal: Goal;
  showDate?: boolean;
  showArrow?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`w-full py-4 px-6 flex flex-row content-center ${className}`}
    >
      <button type="button" className="mr-3">
        <IconContext.Provider value={{ className: 'fill-dark h-7 w-7' }}>
          {goal.finished ? <Check /> : <NoCheck />}
        </IconContext.Provider>
      </button>
      {goal.dates && showDate ? (
        // TODO: Show the appropiate date
        <p className="font-semibold text-blue text-xl mr-3">{goal.nextDate}</p>
      ) : null}
      <p className="font-light text-blue text-lg">{goal.description}</p>
      {showArrow && (
        <button type="button" className="ml-auto">
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
};

export default GoalItem;
