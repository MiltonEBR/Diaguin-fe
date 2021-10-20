import React from 'react';
import DayOption from './DayOption';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function DaySelection({
  value,
  setValue,
}: {
  value: string[];
  setValue: (a: string[]) => void;
}): JSX.Element {
  const onChange = (day: string, checked: boolean): void => {
    if (!checked) {
      setValue(value.filter((v) => v !== day));
    } else {
      setValue([...value, day]);
    }
  };

  return (
    <div
      className="flex flex-row w-full mt-4 px-3 max-w-md
                place-content-center flex-wrap self-center"
    >
      {days.map((d) => (
        <DayOption name={d} key={`dayR-${d}`} onChange={onChange} />
      ))}
    </div>
  );
}

export default DaySelection;
