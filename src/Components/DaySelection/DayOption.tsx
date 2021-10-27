import React from 'react';

function DayOption({
  name,
  onToggle,
  value,
}: {
  name: string;
  onToggle: (s: string, a: boolean) => void;
  value: boolean;
}): JSX.Element {
  return (
    <div>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          id={name}
          className="sr-only"
          onChange={(e) => {
            onToggle(name, e.target.checked);
          }}
        />
        <div
          className={`w-14 h-14 rounded-full cursor-pointer select-none
                      flex items-center place-content-center
                      font-light text-lg mx-2 my-1
                      ${
                        value
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
