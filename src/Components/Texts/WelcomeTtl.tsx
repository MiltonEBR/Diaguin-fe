import React from 'react';
import global from '../../Styles/global';

const style = {
  'font-size': '2em',
  color: global.colors.darkMain,
};

function WelcomeTtl({ name }: { name: string }): JSX.Element {
  return (
    <div style={style}>
      Welcome back, <b>{name}</b>
    </div>
  );
}

export default WelcomeTtl;
