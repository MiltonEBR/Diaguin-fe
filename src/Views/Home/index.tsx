import React, { useState } from 'react';
import Subtitle from '../../Components/Texts/Subtitle';
import WelcomeTtl from '../../Components/Texts/WelcomeTtl';
import Cards from '../../Components/Cards';
import PreviewGoals from '../../Components/PreviewGoals';
import type { Goal, Project } from '../../Types';
import { dateIsToday } from '../../Utils/dates';
import ConfirmationWindow from '../../Components/ConfirmationWindow';
import TextInput from '../../Components/TextInput';

const dummyName = 'Mark';

function Home({
  projects,
  goals,
  createProject,
}: {
  projects: Project[];
  goals: Goal[];
  createProject: (name: string) => void;
}): JSX.Element {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>('');

  const filteredGoals = goals.filter(
    (g) => g.nextDate && dateIsToday(g.nextDate),
  );

  return (
    <div
      className="bg-blue-clear h-screen min-h-screen
                px-6 pt-6 flex flex-col overflow-x-hidden"
    >
      <div
        className="font-bold text-3xl text-blue-dark mb-12
                    absolute top-3 transform -skew-x-6"
      >
        Diaguin
      </div>
      <div className="my-12 mt-20">
        <WelcomeTtl name={dummyName} />
        <Subtitle txt="Let's learn something new!" className="font-light" />
      </div>
      <div className="mb-10">
        <Subtitle txt="My projects" className="mb-12 font-bold" />
        <Cards
          className="-m-6"
          list={projects}
          onCreate={() => setShowConfirm(true)}
        />
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
      {showConfirm && (
        <ConfirmationWindow
          onConfirm={() => {
            setShowConfirm(false);
            createProject(projectName);
            setProjectName('');
          }}
          onCancel={() => setShowConfirm(false)}
        >
          <Subtitle txt="Name your new project" className="mb-6 font-bold" />
          <TextInput
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            placeholder="Project name"
          />
        </ConfirmationWindow>
      )}
    </div>
  );
}

export default Home;
