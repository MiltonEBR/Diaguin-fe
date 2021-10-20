import React from 'react';
import DayOption from './DayOption';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function DaySelection(): JSX.Element {
  return (
    <div
      className="flex flex-row w-full mt-4 px-3 max-w-md
                place-content-center flex-wrap self-center"
    >
      {days.map((d) => (
        <DayOption name={d} key={`dayR-${d}`} />
      ))}
    </div>
  );
}

export default DaySelection;
