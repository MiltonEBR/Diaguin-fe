import React from 'react';
import Header from '../../Components/Header';

const dummyTitle = 'Learn Python';

function Project(): JSX.Element {
  return (
    <div className="flex flex-col h-full box-content">
      <Header name={dummyTitle} />
    </div>
  );
}

export default Project;
