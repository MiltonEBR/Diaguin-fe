import React from 'react';
import BigButton from '../../Components/BigButton';
import DetailedGoals from '../../Components/DetailedGoals';
import Header from '../../Components/Header';
import Subtitle from '../../Components/Texts/Subtitle';
import { Goal, Project as ProjectType } from '../../Types';
import { compAscDates, getDisplayDate } from '../../Utils/dates';

function ProjectGoals({
  project,
  goals,
}: {
  project: ProjectType | null;
  goals: Goal[];
}): JSX.Element {
  if (!project) {
    return <div>Error</div>;
  }

  const { name, id } = project;

  const upcomingGoals = goals
    .filter((g) => g.nextDate && !g.finished)
    .sort((a, b) => compAscDates(a.nextDate, b.nextDate))
    .map((g) => ({ ...g, nextDate: getDisplayDate(g.nextDate) }));
  const noDateGoals = goals.filter((g) => !g.nextDate && !g.finished);

  const finishedGoals = goals
    .filter((g) => g.finished)
    .map((g) =>
      g.nextDate ? { ...g, nextDate: getDisplayDate(g.nextDate) } : g,
    );

  // TODO: Find the best way to filter upcoming / no dates
  return (
    <div
      className="bg-blue-clear h-screen max-h-screen
                  px-6 pt-6 flex flex-col overflow-x-hidden"
    >
      <Header
        name={name}
        sub="Goals"
        className="-ml-6 -mt-6 mb-10"
        route={`/project/${id}`}
      />
      <BigButton
        text="Create goal"
        onClick={() => null}
        className="mb-6 max-w-screen-md flex-shrink-0"
      />
      <Subtitle txt="Upcoming" />
      <DetailedGoals goals={upcomingGoals} className="my-6" />

      <Subtitle txt="No date" />
      <DetailedGoals goals={noDateGoals} className="my-6" />

      <Subtitle txt="Finished" />
      <DetailedGoals goals={finishedGoals} className="my-6" />
    </div>
  );
}

export default ProjectGoals;
