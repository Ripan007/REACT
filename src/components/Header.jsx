import React from 'react';
import ReactImage from './assets/couple.jpg';

const reactDesc = ['xx', 'yy', 'zz'];

function getRanInde(max) {
  // console.log(Math.floor(Math.random() * (max + 1)));
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const descriptiion = reactDesc[getRanInde(2)];
  return (
    <div>
      <img src={ReactImage} alt="couple-image" />
      <p> {descriptiion} show the output</p>
    </div>
  );
}
