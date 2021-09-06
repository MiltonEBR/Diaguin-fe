import React from 'react';
import global from '../../Styles/global';

const style = {
  'font-size': '1.5em',
  color: global.colors.darkMain,
  'font-weigth': 'bold',
};

function Subtitle({ txt }: { txt: string }): JSX.Element {
  return <h2 style={style}>{txt}</h2>;
}

export default Subtitle;
