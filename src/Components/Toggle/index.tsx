import React, { useState } from 'react';

function Toggle({
  name,
  onToggle,
}: {
  name: string;
  onToggle: (a: boolean) => void;
}): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center w-w-min">
      <label className="flex items-center cursor-pointer" htmlFor={name}>
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            name={name}
            id={name}
            defaultChecked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              onToggle(e.target.checked);
            }}
          />
          <div
            className={`absolute left-1 top-1 w-6 h-6 rounded-full
              transition transform ${
                isChecked ? 'bg-purple-light translate-x-full' : 'bg-gray-300'
              }`}
          />
          <div
            className="block bg-blue-ligth bg-opacity-40 w-14 h-8
                        rounded-full z-0"
          />
        </div>
      </label>
    </div>
  );
}

export default Toggle;
