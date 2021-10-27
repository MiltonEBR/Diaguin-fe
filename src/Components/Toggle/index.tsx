import React from 'react';

function Toggle({
  name,
  onToggle,
  value,
}: {
  name: string;
  onToggle: (a: boolean) => void;
  value: boolean;
}): JSX.Element {
  return (
    <div className="flex items-center justify-center w-w-min">
      <label className="flex items-center cursor-pointer" htmlFor={name}>
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            name={name}
            id={name}
            defaultChecked={value}
            onChange={(e) => onToggle(e.target.checked)}
          />
          <div
            className={`absolute left-1 top-1 w-6 h-6 rounded-full
              transition transform ${
                value ? 'bg-purple-light translate-x-full' : 'bg-gray-300'
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
