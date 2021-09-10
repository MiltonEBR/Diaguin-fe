import React from 'react';
import BigButton from '../../Components/BigButton';
import Header from '../../Components/Header';
import ProjectGoals from '../../Components/PreviewGoals/ProjectGoals';
import Progress from '../../Components/Progress';
import Subtitle from '../../Components/Texts/Subtitle';
import { Goal } from '../../Types';

const dummyTitle = 'Learn Python';

const dummyGoals: Goal[] = [
  { name: 'Watch a tutorial', date: 'Today', finished: true },
  { name: 'Practice 30 min', date: 'Today', finished: false },
  { name: 'Read a new recipe', date: 'Today', finished: false },
  { name: 'Prepare a salad', date: 'Today', finished: false },
];

function Project(): JSX.Element {
  return (
    <div className="flex flex-col h-full box-content ">
      <Header name={dummyTitle} sub="Project" className="-ml-6 -mt-6 mb-10" />
      <Subtitle txt="Progress" />
      <Progress curr={50} max={100} className="my-6" />
      <BigButton
        text="Open notes"
        onClick={() => {
          return null;
        }}
        className="mb-6 max-w-screen-md flex-shrink-0"
      />
      <Subtitle txt="Goals" className="font-bold mb-6" />
      <ProjectGoals goals={dummyGoals} className="-ml-6" />
    </div>
  );
}

export default Project;
