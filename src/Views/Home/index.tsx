import React from 'react';
import SingleCard from '../../Components/Cards/SingleCard';
import Subtitle from '../../Components/Texts/Subtitle';
import WelcomeTtl from '../../Components/Texts/WelcomeTtl';

function index(): JSX.Element {
  return (
    <>
      <WelcomeTtl name="Mark" />
      <Subtitle txt="I'm a sub" />
      <SingleCard ttl="Learn Python" description="Some placeholder text" />
    </>
  );
}

export default index;
