import React from 'react';
import Header from '../../Components/Header';
import Subtitle from '../../Components/Texts/Subtitle';

const dummyTitle = 'Learn Python';

function Project(): JSX.Element {
  return (
    <div className="flex flex-col h-full box-content">
      <Header name={dummyTitle} className="-ml-6 -mt-6 mb-10" />
      <Subtitle txt="Progress" />

      <Subtitle txt="Goals" />
    </div>
  );
}

export default Project;
