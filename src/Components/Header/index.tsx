import React from 'react';
import { RiArrowLeftSLine as Arrow } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router';
import Subtitle from '../Texts/Subtitle';
import Title from '../Texts/Title';

function Header({
  name,
  sub,
  route,
  className,
}: {
  name: string;
  sub: string;
  route?: string;
  className?: string;
}): JSX.Element {
  const history = useHistory();

  return (
    <div
      className={`bg-blue-ligth px-6 pt-4 pb-10 rounded-b-3xl
                    w-screen ${className}`}
    >
      <button
        type="button"
        className="mb-6 -ml-3"
        onClick={() => history.push(route || '/')}
      >
        <IconContext.Provider value={{ className: 'fill-gray-50 h-9 w-9' }}>
          <Arrow />
        </IconContext.Provider>
      </button>
      <Subtitle txt={sub} className="font-semibold mb-3" />
      <Title txt={name} />
    </div>
  );
}

Header.defaultProps = {
  className: '',
  route: '/',
};

export default Header;
