import React from 'react';
import global from '../../Styles/global';

const miniSub = (text: string): JSX.Element => {
  const style = {
    color: global.colors.darkMain,
    'font-size': '1em',
  };

  return <h3 style={style}>{text}</h3>;
};

interface Props {
  ttl: string;
  description: string;
  onClick?: () => void;
}

function SingleCard({ ttl, description, onClick }: Props): JSX.Element {
  return (
    <div>
      {miniSub(ttl)}
      <p>{description}</p>
      <button
        onClick={() => {
          if (onClick) onClick();
        }}
        type="button"
      >
        Go
      </button>
    </div>
  );
}

SingleCard.defaultProps = {
  onClick: null,
};

export default SingleCard;
