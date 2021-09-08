import React from 'react';
import Subtitle from '../../Components/Texts/Subtitle';
import LightSubtitle from '../../Components/Texts/LightSubtitle';
import WelcomeTtl from '../../Components/Texts/WelcomeTtl';
import Cards from '../../Components/Cards';

function Home(): JSX.Element {
  return (
    <div className="grid grid-cols-1 grid-rows-4 h-full box-content">
      <div>
        <WelcomeTtl name="Mark" />
        <LightSubtitle txt="Let's learn something new!" />
      </div>
      <div className="row-span-2 max-h-full">
        <Subtitle txt="My projects" />
        <Cards />
      </div>
      <div>
        <Subtitle txt="Today goals" />
      </div>
    </div>
  );
}

export default Home;
