import React from 'react';
import { CardProps } from '../../Types';
import Button from './Button';
import Content from './Content';
import Title from './Title';

function SingleCard({
  ttl,
  description,
  onClick,
  className,
}: CardProps): JSX.Element {
  return (
    <div
      className={`w-60 max-w-xl min-w-min h-48 p-6
                  shadow-xl rounded-3xl bg-gray-50
                  flex flex-none flex-col mr-6 ${className}`}
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
  className: '',
};

export default SingleCard;
