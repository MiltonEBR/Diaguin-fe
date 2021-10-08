import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillPlusCircle } from 'react-icons/ai';

function CreateCard({ onClick }: { onClick?: () => void }): JSX.Element {
  return (
    <div
      className={`w-60 max-w-xl min-w-min h-48 p-6
                  shadow-xl rounded-3xl bg-purple-light bg-opacity-30
                  flex flex-none flex-col items-center place-content-center
                  mr-6`}
    >
      <button type="button" onClick={onClick}>
        <IconContext.Provider
          value={{ className: 'fill-purple opacity-70 h-20 w-20 mb-4' }}
        >
          <AiFillPlusCircle />
        </IconContext.Provider>
      </button>
      <p className="text-purple-light">Create project</p>
    </div>
  );
}

CreateCard.defaultProps = {
  onClick: null,
};

export default CreateCard;
