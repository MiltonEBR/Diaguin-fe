import React, { useState } from 'react';
import { useHistory } from 'react-router';
import BigButton from '../../Components/BigButton';
import ConfirmationWindow from '../../Components/ConfirmationWindow';
import DetailedGoals from '../../Components/DetailedGoals';
import GoalCreationWindow from '../../Components/GoalCreationWindow';
import Header from '../../Components/Header';
import Subtitle from '../../Components/Texts/Subtitle';
import type { Goal, NewGoal, Project as ProjectType } from '../../Types';
import { compAscDates, getDisplayDate } from '../../Utils/dates';

function ProjectGoals({
  project,
  goals,
  createGoal,
  deleteGoal,
  updateGoal,
}: {
  project: ProjectType | null;
  goals: Goal[];
  createGoal: (goal: NewGoal, projectId: string) => void;
  deleteGoal: (goalId: string) => void;
  updateGoal: (id: string, goal: NewGoal) => void;
}): JSX.Element {
  const history = useHistory();

  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const [showDeleteWindow, setShowDeleteWindow] = useState<boolean>(false);

  const [showEditWindow, setShowEditWindow] = useState<boolean>(false);

  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

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

  const onClickDelete = (goal: Goal): void => {
    setSelectedGoal(goal);
    setShowDeleteWindow(true);
  };

  const onClickEdit = (goal: Goal): void => {
    setSelectedGoal(goal);
    setShowEditWindow(true);
  };

  return (
    <div
      className="bg-blue-clear h-screen max-h-screen
                  px-6 pt-6 flex flex-col overflow-x-hidden"
    >
      <Header
        name={name}
        sub="Goals"
        className="-ml-6 -mt-6 mb-10"
        onBack={() => history.push(`/project/${id}`)}
      />
      <BigButton
        text="Create goal"
        onClick={() => setShowConfirm(true)}
        className="mb-6 max-w-screen-md flex-shrink-0"
      />
      {upcomingGoals.length > 0 && <Subtitle txt="Upcoming" />}
      <DetailedGoals
        goals={upcomingGoals}
        className="my-6"
        onDelete={onClickDelete}
        onEdit={onClickEdit}
      />

      {noDateGoals.length > 0 && <Subtitle txt="No date" />}
      <DetailedGoals
        goals={noDateGoals}
        className="my-6"
        onDelete={onClickDelete}
        onEdit={onClickEdit}
      />

      {finishedGoals.length > 0 && <Subtitle txt="Finished" />}
      <DetailedGoals
        goals={finishedGoals}
        className="my-6"
        onDelete={onClickDelete}
        onEdit={onClickEdit}
      />

      {showConfirm && (
        <GoalCreationWindow
          toggleWindow={setShowConfirm}
          onAccept={(goal) => createGoal(goal, project.id)}
          onClose={() => setSelectedGoal(null)}
        />
      )}

      {showEditWindow && (
        <GoalCreationWindow
          toggleWindow={setShowEditWindow}
          onAccept={(uGoal) => {
            if (selectedGoal) updateGoal(selectedGoal.id, uGoal);
          }}
          onClose={() => setSelectedGoal(null)}
          initParams={
            selectedGoal
              ? {
                  dates: selectedGoal.dates,
                  name: selectedGoal.description,
                  repeat: selectedGoal.repeat,
                }
              : undefined
          }
        />
      )}

      {showDeleteWindow && (
        <ConfirmationWindow
          onCancel={() => {
            setShowDeleteWindow(false);
            setSelectedGoal(null);
          }}
          onConfirm={() => {
            if (selectedGoal) deleteGoal(selectedGoal.id);
            setSelectedGoal(null);
            setShowDeleteWindow(false);
          }}
        >
          <Subtitle txt="Are you sure?" className="font-bold" />
          <Subtitle
            txt={`Delete: ${
              goals.find((g) => g.id === selectedGoal?.id)?.description
            }`}
            className="font-normal mt-2"
          />
        </ConfirmationWindow>
      )}
    </div>
  );
}

export default ProjectGoals;
