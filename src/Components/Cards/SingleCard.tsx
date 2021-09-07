import React from 'react';
import Button from './Button';
import Content from './Content';
import Title from './Title';

interface Props {
  ttl: string;
  description: string;
  onClick?: (txt: string) => void;
}

function SingleCard({ ttl, description, onClick }: Props): JSX.Element {
  return (
    <div
      className={`w-60 max-w-xl min-w-min h-56 p-6
    shadow-xl rounded-3xl bg-gray
    flex flex-none flex-col`}
    >
      <Title text={ttl} />
      <Content text={description} />
      <Button
        text="Open"
        onClick={() => {
          if (onClick) onClick(ttl);
        }}
      />
    </div>
  );
}

SingleCard.defaultProps = {
  onClick: null,
};

export default SingleCard;
