import React from 'react';
import { RiArrowLeftSLine as Arrow } from 'react-icons/ri';
import { AiOutlineDelete as Delete } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Subtitle from '../Texts/Subtitle';
import Title from '../Texts/Title';

function Header({
  name,
  sub,
  onBack,
  className,
  onDelete,
}: {
  name: string;
  sub: string;
  className?: string;
  onDelete?: undefined | (() => void);
  onBack: () => void;
}): JSX.Element {
  return (
    <div
      className={`bg-blue-ligth px-6 pt-4 pb-10 rounded-b-3xl
                    w-screen ${className}`}
    >
      <div className="mb-6 -ml-3 flex flex-row">
        <button type="button" onClick={() => onBack()}>
          <IconContext.Provider value={{ className: 'fill-gray-50 h-9 w-9' }}>
            <Arrow />
          </IconContext.Provider>
        </button>
        {onDelete && (
          <button type="button" onClick={() => onDelete()} className="ml-auto">
            <IconContext.Provider value={{ className: 'fill-gray-50 h-9 w-9' }}>
              <Delete />
            </IconContext.Provider>
          </button>
        )}
      </div>
      <Subtitle txt={sub} className="font-semibold mb-3" />
      <Title txt={name} />
    </div>
  );
}

Header.defaultProps = {
  className: '',
  onDelete: undefined,
};

export default Header;
