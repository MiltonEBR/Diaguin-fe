import React from 'react';
import Subtitle from '../../Components/Texts/Subtitle';
import WelcomeTtl from '../../Components/Texts/WelcomeTtl';
import Cards from '../../Components/Cards';
import PreviewGoals from '../../Components/PreviewGoals';
import { Project } from '../../Types';

const dummyName = 'Mark';

// TODO: Figure out how to display the goals

function Home({ projects }: { projects: Project[] }): JSX.Element {
  return (
    <div
      className="bg-blue-clear h-screen min-h-screen
                px-6 pt-6 flex flex-col overflow-x-hidden"
    >
      <div className="mb-16">App name placeholder</div>
      <div className="mb-12">
        <WelcomeTtl name={dummyName} />
        <Subtitle txt="Let's learn something new!" className="font-light" />
      </div>
      <div className="mb-16">
        <Subtitle txt="My projects" className="mb-12 font-bold" />
        <Cards className="-m-6" list={projects} />
      </div>
      <div className="flex flex-col flex-grow max-w-full">
        <Subtitle txt="Today goals" className="mb-12 font-bold" />
        <PreviewGoals goals={[]} className="-m-6 h-full" />
      </div>
    </div>
  );
}

export default Home;
