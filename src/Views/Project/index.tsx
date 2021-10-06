import React from 'react';
import Header from '../../Components/Header';
import PreviewGoals from '../../Components/PreviewGoals';
import Progress from '../../Components/Progress';
import Subtitle from '../../Components/Texts/Subtitle';
import { Goal, Project as ProjectType } from '../../Types';
import { compAscDates, getDisplayDate } from '../../Utils/dates';

function Project({
  project,
  goals,
}: {
  project: ProjectType | null;
  goals: Goal[];
}): JSX.Element {
  if (!project) {
    return <div>Error</div>;
  }

  const { name, goalCount, finishedGoals, id } = project;

  const upcomingGoals = goals
    .filter((g) => g.nextDate)
    .sort((a, b) => compAscDates(a.nextDate, b.nextDate))
    .map((g) => ({ ...g, nextDate: getDisplayDate(g.nextDate) }));
  const noDateGoals = goals.filter((g) => !g.nextDate);

  // TODO: Find the best way to filter upcoming / no dates
  return (
    <div
      className="bg-blue-clear h-screen max-h-screen
                  px-6 pt-6 flex flex-col overflow-x-hidden"
    >
      <Header name={name} sub="Project" className="-ml-6 -mt-6 mb-10" />
      <Subtitle txt="Progress" />
      <Progress curr={finishedGoals} max={goalCount} className="my-6" />
      <Subtitle txt="Goals" className="font-bold mb-6" />

      <PreviewGoals
        upcomingGoals={upcomingGoals}
        noDateGoals={noDateGoals}
        className="-ml-6 flex-shrink flex-grow-0 min-h-0"
        onExpand={`/project/${id}/details`}
      />
    </div>
  );
}

export default Project;
