import React from 'react';

function Bar({
  curr,
  max,
  className,
}: {
  curr: number;
  max: number;
  className?: string;
}): JSX.Element {
  const percent = (curr * 100) / max > 100 ? 100 : (curr * 100) / max;

  return (
    <div
      className={`bg-gray-50 rounded-3xl h-10 w-full shadow-xl
                  flex items-center justify-items-center relative
                  overflow-hidden ${className}`}
    >
      <div
        className="bg-black w-full h-10 rounded-3xl transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
      <p
        className="absolute left-1/2 transform -translate-x-1/2 text-xl
                  text-blue-ligth italic mix-blend-difference font-semibold"
      >
        {percent.toFixed(2)}%
      </p>
      <div className="bg-blue-ligth h-10 absolute mix-blend-screen w-full" />
    </div>
  );
}

Bar.defaultProps = {
  className: '',
};

export default Bar;
