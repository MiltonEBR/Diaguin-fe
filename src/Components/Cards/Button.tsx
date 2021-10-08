import React from 'react';

function Button({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  className?: string;
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-purple-light min-w-min w-3/5 h-10 rounded-full
                  font-bold text-gray-50
                  self-center hover:bg-purple-hover ${className}`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  className: '',
};

export default Button;
