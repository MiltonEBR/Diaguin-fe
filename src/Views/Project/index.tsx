import React, { useEffect, useState } from 'react';
import BigButton from '../../Components/BigButton';
import Header from '../../Components/Header';
import ProjectGoals from '../../Components/PreviewGoals/ProjectGoals';
import Progress from '../../Components/Progress';
import Subtitle from '../../Components/Texts/Subtitle';
import goalsServices from '../../Services/goals';
import { Goal, Project as ProjectType } from '../../Types';

function Project({ project }: { project: ProjectType | null }): JSX.Element {
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    if (!project) return;

    const getGoals = async (): Promise<void> => {
      for (let i = 0; i < project.goalsId.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        const goal = await goalsServices.getById(project.goalsId[i]);
        setGoals((prev) => [...prev, goal]);
      }
    };
    getGoals();
  }, [project]);

  if (!project) {
    return <div>Error</div>;
  }

  const { name, goalCount, finishedGoals } = project;

  // TODO: Find the best way to filter upcoming / no dates
  return (
    <div
      className="bg-blue-clear h-screen max-h-screen
                  px-6 pt-6 flex flex-col overflow-x-hidden"
    >
      <Header name={name} sub="Project" className="-ml-6 -mt-6 mb-10" />
      <Subtitle txt="Progress" />
      <Progress curr={finishedGoals} max={goalCount} className="my-6" />
      <BigButton
        text="Open notes"
        onClick={() => {
          return null;
        }}
        className="mb-6 max-w-screen-md flex-shrink-0"
      />
      <Subtitle txt="Goals" className="font-bold mb-6" />

      <ProjectGoals
        upcomingGoals={goals.filter((g) => g.dates.length > 0)}
        noDateGoals={goals.filter((g) => g.dates.length <= 0)}
        className="-ml-6 flex-shrink flex-grow-0 min-h-0"
      />
    </div>
  );
}

export default Project;
