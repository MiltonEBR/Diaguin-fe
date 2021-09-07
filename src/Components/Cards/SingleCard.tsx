import React from 'react';
import Title from './Title';

interface Props {
  ttl: string;
  description: string;
  onClick?: () => void;
}

function SingleCard({ ttl, description, onClick }: Props): JSX.Element {
  return (
    <div>
      <Title text={ttl} />
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
