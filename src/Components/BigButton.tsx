import React from 'react';

function BigButton({
  text,
  onClick,
  className,
}: {
  text: string;
  className?: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-purple-light min-w-min w-full h-12 rounded-full
                  font-semibold text-gray-50 text-xl
                  self-center hover:bg-purple-hover ${className}`}
    >
      {text}
    </button>
  );
}

BigButton.defaultProps = {
  className: '',
};

export default BigButton;
