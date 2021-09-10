import React from 'react';
import Header from '../../Components/Header';

const dummyTitle = 'Learn Python';

function Goals(): JSX.Element {
  return (
    <div className="flex flex-col h-full box-content ">
      <Header name={dummyTitle} sub="Goals" className="-ml-6 -mt-6 mb-10" />
    </div>
  );
}

export default Goals;
