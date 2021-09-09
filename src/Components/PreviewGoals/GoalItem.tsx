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
}: {
  goal: Goal;
  showDate?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <div className={`w-full py-4 px-6 flex flex-row items-center ${className}`}>
      <button type="button" className="mr-3">
        <IconContext.Provider value={{ className: 'fill-dark h-7 w-7' }}>
          {goal.finished ? <Check /> : <NoCheck />}
        </IconContext.Provider>
      </button>
      {goal.date && showDate ? <p>{goal.date}</p> : null}
      <p className="font-light text-blue text-lg">{goal.name}</p>
      <button type="button" className="ml-auto">
        <IconContext.Provider value={{ className: 'fill-dark h-7 w-7' }}>
          <Arrow />
        </IconContext.Provider>
      </button>
    </div>
  );
}

GoalItem.defaultProps = {
  className: '',
  showDate: false,
};

export default GoalItem;
