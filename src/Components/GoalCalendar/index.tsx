import React from 'react';
import { IconContext } from 'react-icons';
import DayPicker, {
  DateUtils,
  DayModifiers,
  NavbarElementProps,
} from 'react-day-picker';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './calendar.css';
import { getClosestDate, todayDate } from '../../Utils/dates';

function Navbar({
  onPreviousClick,
  onNextClick,
  className,
  showPreviousButton,
}: NavbarElementProps): JSX.Element {
  return (
    <div
      className={`w-2/3 flex justify-between self-center
                  absolute top-4 ${className}`}
    >
      <button type="button" onClick={() => onPreviousClick()}>
        <IconContext.Provider
          value={{
            className: `w-8 h-8 fill-dark ${
              showPreviousButton ? '' : 'opacity-30'
            }`,
          }}
        >
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

function GoalCalendar({
  value,
  setValue,
}: {
  value: Date[];
  setValue: (a: Date[]) => void;
}): JSX.Element {
  const handleDayClick = (day: Date, { selected }: DayModifiers): void => {
    const selectedDays = value.concat();
    if (selected) {
      const selectedIndex = selectedDays.findIndex((selectedDay) =>
        DateUtils.isSameDay(selectedDay, day),
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    setValue(selectedDays);
  };

  return (
    <DayPicker
      fromMonth={todayDate}
      selectedDays={value}
      onDayClick={handleDayClick}
      navbarElement={Navbar}
      disabledDays={{
        before: todayDate,
      }}
      month={getClosestDate(value)}
    />
  );
}

export default GoalCalendar;
