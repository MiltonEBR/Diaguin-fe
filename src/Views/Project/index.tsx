import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ConfirmationWindow from '../../Components/ConfirmationWindow';
import Header from '../../Components/Header';
import PreviewGoals from '../../Components/PreviewGoals';
import Progress from '../../Components/Progress';
import Subtitle from '../../Components/Texts/Subtitle';
import type { Goal, Project as ProjectType } from '../../Types';
import { compAscDates, getDisplayDate } from '../../Utils/dates';

function Project({
  project,
  goals,
  deleteProject,
}: {
  project: ProjectType | null;
  goals: Goal[];
  deleteProject: (id: string) => void;
}): JSX.Element {
  const history = useHistory();
  const [deleteWindow, setDeleteWindow] = useState<boolean>(false);

  if (!project) {
    return <div>Error</div>;
  }

  const { name, goalCount, finishedGoals, id } = project;

  const upcomingGoals = goals
    .filter((g) => g.nextDate)
    .sort((a, b) => compAscDates(a.nextDate, b.nextDate))
    .map((g) => ({ ...g, nextDate: getDisplayDate(g.nextDate) }));
  const noDateGoals = goals.filter((g) => !g.nextDate);

  return (
    <div
      className="bg-blue-clear h-screen max-h-screen
                  px-6 pt-6 flex flex-col overflow-x-hidden"
    >
      <Header
        name={name}
        sub="Project"
        className="-ml-6 -mt-6 mb-10"
        onDelete={() => setDeleteWindow(true)}
        onBack={() => history.push('/')}
      />
      <Subtitle txt="Progress" />
      <Progress curr={finishedGoals} max={goalCount} className="my-6" />
      <Subtitle txt="Goals" className="font-bold mb-6" />

      <PreviewGoals
        upcomingGoals={upcomingGoals}
        noDateGoals={noDateGoals}
        className="-ml-6 flex-shrink flex-grow-0 min-h-0"
        onExpand={`/project/${id}/details`}
      />

      {deleteWindow && (
        <ConfirmationWindow
          onCancel={() => setDeleteWindow(false)}
          onConfirm={() => {
            deleteProject(project.id);
            history.push('/');
          }}
        >
          <Subtitle txt="Are you sure?" className="font-bold" />
          <Subtitle txt={`Delete: ${name}`} className="font-normal mt-2" />
        </ConfirmationWindow>
      )}
    </div>
  );
}

export default Project;
