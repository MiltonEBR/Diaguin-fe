import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaCheckCircle } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

function ConfirmationWindow({
  children,
  onConfirm,
  onCancel,
}: {
  children?: React.ReactChild | React.ReactChild[];
  onConfirm?: () => void;
  onCancel?: () => void;
}): JSX.Element {
  return (
    <div
      className="absolute top-0 left-0
                bg-blue-dark bg-opacity-75 h-screen w-screen
                flex items-center place-content-center p-6"
    >
      <form
        className="bg-gray-50 w-full max-w-lg h-auto p-6 rounded-xl
      flex flex-col shadow-xl"
      >
        {children}
        <div className="self-center mt-6">
          <button type="button" onClick={onConfirm} className="mr-20">
            <IconContext.Provider
              value={{ className: 'fill-purple w-10 h-10' }}
            >
              <FaCheckCircle />
            </IconContext.Provider>
          </button>
          <button type="button" onClick={onCancel}>
            <IconContext.Provider
              value={{ className: 'fill-purple w-10 h-10' }}
            >
              <GiCancel />
            </IconContext.Provider>
          </button>
        </div>
      </form>
    </div>
  );
}

ConfirmationWindow.defaultProps = {
  onCancel: null,
  onConfirm: null,
  children: [],
};

export default ConfirmationWindow;
