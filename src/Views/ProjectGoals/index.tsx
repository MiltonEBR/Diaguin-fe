import React, { useState } from 'react';
import BigButton from '../../Components/BigButton';
import ConfirmationWindow from '../../Components/ConfirmationWindow';
import DetailedGoals from '../../Components/DetailedGoals';
import GoalCalendar from '../../Components/GoalCalendar';
import Header from '../../Components/Header';
import TextInput from '../../Components/TextInput';
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
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>('');

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
        onClick={() => setShowConfirm(true)}
        className="mb-6 max-w-screen-md flex-shrink-0"
      />
      {upcomingGoals.length > 0 && <Subtitle txt="Upcoming" />}
      <DetailedGoals goals={upcomingGoals} className="my-6" />

      {noDateGoals.length > 0 && <Subtitle txt="No date" />}
      <DetailedGoals goals={noDateGoals} className="my-6" />

      {finishedGoals.length > 0 && <Subtitle txt="Finished" />}
      <DetailedGoals goals={finishedGoals} className="my-6" />

      {showConfirm && (
        <ConfirmationWindow
          onConfirm={() => {
            setShowConfirm(false);
            // createProject(projectName);
            setProjectName('');
          }}
          onCancel={() => setShowConfirm(false)}
        >
          <Subtitle txt="Oh boy this is missing" className="mb-6 font-bold" />
          <TextInput
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            placeholder="Goal name"
          />
          <Subtitle txt="Goal Dates" className="mb-6 font-bold" />
          <GoalCalendar />
        </ConfirmationWindow>
      )}
    </div>
  );
}

export default ProjectGoals;
