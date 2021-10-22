import { isDate } from 'date-fns';
import React, { useState } from 'react';
import BigButton from '../../Components/BigButton';
import ConfirmationWindow from '../../Components/ConfirmationWindow';
import DaySelection from '../../Components/DaySelection';
import DetailedGoals from '../../Components/DetailedGoals';
import GoalCalendar from '../../Components/GoalCalendar';
import Header from '../../Components/Header';
import TextInput from '../../Components/TextInput';
import Subtitle from '../../Components/Texts/Subtitle';
import Toggle from '../../Components/Toggle';
import { Goal, NewGoal, Project as ProjectType } from '../../Types';
import { compAscDates, getDisplayDate } from '../../Utils/dates';

function ProjectGoals({
  project,
  goals,
  createGoal,
}: {
  project: ProjectType | null;
  goals: Goal[];
  createGoal: (goal: NewGoal, projectId: string) => void;
}): JSX.Element {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [goalName, setGoalName] = useState<string>('');
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  const [dates, setDates] = useState<Date[] | string[]>([]);

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
          onConfirm={(e) => {
            e.preventDefault();
            setShowConfirm(false);
            const newGoal: NewGoal = {
              description: goalName,
              repeat: isRepeat,
              dates: dates.map((d) =>
                isDate(d) ? (d as Date).toJSON() : (d as string),
              ),
            };
            createGoal(newGoal, project.id);
            setGoalName('');
            setDates([]);
            setIsRepeat(false);
          }}
          onCancel={() => {
            setShowConfirm(false);
            setGoalName('');
            setDates([]);
            setIsRepeat(false);
          }}
        >
          <Subtitle txt="Goal name" className="mb-6 font-bold" />
          <TextInput
            onChange={(e) => setGoalName(e.target.value)}
            value={goalName}
            placeholder="Goal name"
          />
          <div className="my-8 flex flex-row">
            <Subtitle txt="On Repeat" className="font-bold mr-6" />
            <Toggle
              name="repeat"
              onToggle={(checked) => {
                setIsRepeat(checked);
                setDates([]);
              }}
            />
          </div>
          <Subtitle txt="Goal Dates" className="font-bold" />
          {isRepeat ? (
            <DaySelection value={dates as string[]} setValue={setDates} />
          ) : (
            <GoalCalendar value={dates as Date[]} setValue={setDates} />
          )}
        </ConfirmationWindow>
      )}
    </div>
  );
}

export default ProjectGoals;
