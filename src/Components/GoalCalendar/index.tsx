import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import DayPicker, {
  DateUtils,
  DayModifiers,
  NavbarElementProps,
} from 'react-day-picker';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './calendar.css';
import { todayDate } from '../../Utils/dates';

function Navbar({
  onPreviousClick,
  onNextClick,
  className,
}: NavbarElementProps): JSX.Element {
  return (
    <div
      className={`w-2/3 flex justify-between self-center
                  absolute top-4 ${className}`}
    >
      <button type="button" onClick={() => onPreviousClick()}>
        <IconContext.Provider value={{ className: 'w-8 h-8 fill-dark' }}>
          <IoIosArrowBack />
        </IconContext.Provider>
      </button>
      <button type="button" onClick={() => onNextClick()}>
        <IconContext.Provider value={{ className: 'w-8 h-8 fill-dark' }}>
          <IoIosArrowForward />
        </IconContext.Provider>
      </button>
    </div>
  );
}

function GoalCalendar(): JSX.Element {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDayClick = (day: Date, { selected }: DayModifiers): void => {
    const selectedDays = selectedDates.concat();
    if (selected) {
      const selectedIndex = selectedDays.findIndex((selectedDay) =>
        DateUtils.isSameDay(selectedDay, day),
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    setSelectedDates(selectedDays);
  };

  return (
    <DayPicker
      fromMonth={todayDate}
      selectedDays={selectedDates}
      onDayClick={handleDayClick}
      navbarElement={Navbar}
    />
  );
}

/* <button type="button" onClick={handleClick}>
            <IconContext.Provider value={{ className: 'w-8 h-8 fill-dark' }}>
              {direction === 'right' ? (
                <IoIosArrowForward />
              ) : (
                <IoIosArrowBack />
              )}
            </IconContext.Provider>
          </button> */

export default GoalCalendar;
