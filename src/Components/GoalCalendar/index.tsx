import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Calendar } from 'react-multi-date-picker';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './calendar.css';

function GoalCalendar(): JSX.Element {
  const [value, setValue] = useState<any>(new Date());
  console.log(value);
  return (
    <div>
      <Calendar
        value={value}
        onChange={setValue}
        multiple
        shadow={false}
        className="purple"
        renderButton={(
          direction: string,
          handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
        ) => (
          <button type="button" onClick={handleClick}>
            <IconContext.Provider value={{ className: 'w-8 h-8 fill-dark' }}>
              {direction === 'right' ? (
                <IoIosArrowForward />
              ) : (
                <IoIosArrowBack />
              )}
            </IconContext.Provider>
          </button>
        )}
      />
    </div>
  );
}

export default GoalCalendar;
