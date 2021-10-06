import React from 'react';
import Subtitle from '../../Components/Texts/Subtitle';
import WelcomeTtl from '../../Components/Texts/WelcomeTtl';
import Cards from '../../Components/Cards';
import PreviewGoals from '../../Components/PreviewGoals';
import { Goal, Project } from '../../Types';
import { dateIsToday } from '../../Utils/dates';

const dummyName = 'Mark';

// TODO: Figure out how to display the goals

function Home({
  projects,
  goals,
}: {
  projects: Project[];
  goals: Goal[];
}): JSX.Element {
  const filteredGoals = goals.filter(
    (g) => g.nextDate && dateIsToday(g.nextDate),
  );

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
        <Subtitle txt="Today goals" className="mb-8 font-bold" />
        <PreviewGoals
          upcomingGoals={[]}
          noDateGoals={filteredGoals}
          noTitles
          className="-mx-6"
        />
      </div>
    </div>
  );
}

export default Home;
