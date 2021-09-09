import React from 'react';
import Subtitle from '../../Components/Texts/Subtitle';
import WelcomeTtl from '../../Components/Texts/WelcomeTtl';
import Cards from '../../Components/Cards';
import PreviewGoals from '../../Components/PreviewGoals';
import { CardsList, Goal } from '../../Types';

const dummyProjects: CardsList = [
  { ttl: 'Learn Python', description: 'Oh yea my friend' },
  { ttl: 'Eat healthy', description: 'Get good' },
];

const dummyGoals: Goal[] = [
  { name: 'Watch a tutorial', date: 'Today', finished: true },
  { name: 'Practice 30 min', date: 'Today', finished: false },
  { name: 'Read a new recipe', date: 'Today', finished: false },
  { name: 'Prepare a salad', date: 'Today', finished: false },
];

const dummyName = 'Mark';

function Home(): JSX.Element {
  return (
    <div className="flex flex-col h-full box-content">
      <div className="mb-16">App name placeholder</div>
      <div className="mb-12">
        <WelcomeTtl name={dummyName} />
        <Subtitle txt="Let's learn something new!" className="font-light" />
      </div>
      <div className="mb-16">
        <Subtitle txt="My projects" className="mb-12 font-bold" />
        <Cards className="-m-6" list={dummyProjects} />
      </div>
      <div className="flex flex-col flex-grow">
        <Subtitle txt="Today goals" className="mb-12 font-bold" />
        <PreviewGoals goals={dummyGoals} className="-m-6 h-full" />
      </div>
    </div>
  );
}

export default Home;
