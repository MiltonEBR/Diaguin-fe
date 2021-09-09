import React from 'react';

function Title({
  txt,
  className,
}: {
  txt: string;
  className?: string;
}): JSX.Element {
  return (
    <h2 className={`text-3xl text-gray-50 ${className || 'font-bold'}`}>
      {txt}
    </h2>
  );
}

Title.defaultProps = {
  className: '',
};

export default Title;
