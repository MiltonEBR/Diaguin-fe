import React from 'react';
import { CardProps } from '../../Types';
import Button from './Button';
import Content from './Content';
import Title from './Title';

interface Props extends Omit<CardProps, 'description'> {
  description: string | string[];
}

function SingleCard({
  ttl,
  description,
  onClick,
  className,
}: Props): JSX.Element {
  return (
    <div
      className={`w-60 max-w-xl min-w-min h-48 p-6
                  shadow-xl rounded-3xl bg-gray-50
                  flex flex-none flex-col mr-6 ${className}`}
    >
      <Title text={ttl} />
      {Array.isArray(description) ? (
        description.map((d) => <Content text={d} />)
      ) : (
        <Content text={description} />
      )}
      <Button
        text="Open"
        onClick={() => {
          if (onClick) onClick(ttl);
        }}
        className="mt-3 flex-shrink-0"
      />
    </div>
  );
}

// SingleCard.defaultProps = {
//   onClick: null,
//   className: '',
// };

export default SingleCard;
