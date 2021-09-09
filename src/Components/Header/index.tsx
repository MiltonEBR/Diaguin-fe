import React from 'react';
import { RiArrowLeftSLine as Arrow } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import Subtitle from '../Texts/Subtitle';
import Title from '../Texts/Title';

function Header({ name }: { name: string }): JSX.Element {
  return (
    <div
      className="bg-blue-ligth px-6 pt-6 pb-10 rounded-b-3xl
                    absolute w-full left-0 top-0"
    >
      <button type="button" className="mb-7">
        <IconContext.Provider value={{ className: 'fill-gray-50 h-9 w-9' }}>
          <Arrow />
        </IconContext.Provider>
      </button>
      <Subtitle txt="Project" className="font-semibold mb-3" />
      <Title txt={name} />
    </div>
  );
}

export default Header;
