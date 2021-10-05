import {
  compareAsc,
  format,
  getDay,
  getYear,
  parseJSON,
  startOfToday,
} from 'date-fns';
import { differenceInDays } from 'date-fns/esm';
import React from 'react';
import BigButton from '../../Components/BigButton';
import Header from '../../Components/Header';
import ProjectGoals from '../../Components/PreviewGoals/ProjectGoals';
import Progress from '../../Components/Progress';
import Subtitle from '../../Components/Texts/Subtitle';
import { Goal, Project as ProjectType } from '../../Types';

const dayName = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getWeekDay = (date: string): string => {
  const today = startOfToday();
  const day = parseJSON(date);
  const dif = Math.abs(differenceInDays(today, day));
  if (dif <= 6) return dayName[getDay(day)];

  const yDif = Math.abs(getYear(day) - getYear(today));
  return yDif >= 1 ? format(day, 'dd/MMM/yyy') : format(day, 'MMM, do');
};

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

  const { name, goalCount, finishedGoals } = project;

  const upcomingGoals = goals
    .filter((g) => g.nextDate)
    .sort((a, b) => compareAsc(parseJSON(a.nextDate), parseJSON(b.nextDate)))
    .map((g) => ({ ...g, nextDate: getWeekDay(g.nextDate) }));
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
      <BigButton
        text="Open notes"
        onClick={() => {
          return null;
        }}
        className="mb-6 max-w-screen-md flex-shrink-0"
      />
      <Subtitle txt="Goals" className="font-bold mb-6" />

      <ProjectGoals
        upcomingGoals={upcomingGoals}
        noDateGoals={noDateGoals}
        className="-ml-6 flex-shrink flex-grow-0 min-h-0"
      />
    </div>
  );
}

export default Project;
