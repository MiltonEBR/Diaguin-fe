import React, { useState } from 'react';

function DayOption({
  name,
  onChange,
}: {
  name: string;
  onChange: (s: string, a: boolean) => void;
}): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          id={name}
          className="sr-only"
          onChange={(e) => {
            setActive(e.target.checked);
            onChange(name, e.target.checked);
          }}
        />
        <div
          className={`w-14 h-14 rounded-full cursor-pointer select-none
                      flex items-center place-content-center
                      font-light text-lg mx-2 my-1
                      ${
                        active
                          ? 'bg-purple-light text-gray-50'
                          : 'text-blue-dark'
                      }`}
        >
          {name}
        </div>
      </label>
    </div>
  );
}

export default DayOption;
