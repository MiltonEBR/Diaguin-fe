import React from 'react';
import Subtitle from '../../Components/Texts/Subtitle';
import LightSubtitle from '../../Components/Texts/LightSubtitle';
import WelcomeTtl from '../../Components/Texts/WelcomeTtl';
import Cards from '../../Components/Cards';
import PreviewList from '../../Components/PreviewList';

function Home(): JSX.Element {
  return (
    <div className="flex flex-col h-full box-content">
      <div className="mb-16">App name placeholder</div>
      <div className="mb-12">
        <WelcomeTtl name="Mark" />
        <LightSubtitle txt="Let's learn something new!" />
      </div>
      <div className="mb-16">
        <div className="mb-12">
          <Subtitle txt="My projects" />
        </div>
        <div className="-m-6">
          <Cards />
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="mb-12">
          <Subtitle txt="Today goals" />
        </div>
        <div className="-m-6 h-full">
          <PreviewList />
        </div>
      </div>
    </div>
  );
}

export default Home;
