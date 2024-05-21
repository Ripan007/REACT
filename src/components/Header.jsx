import React from 'react';

const reactDesc = ['xx', 'yy', 'zz'];

function getRanInde(max) {
  // console.log(Math.floor(Math.random() * (max + 1)));
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const descriptiion = reactDesc[getRanInde(2)];
  return (
    <div>
      <p>
        {' '}
        {descriptiion} 🥇 shows this random output which are randomly executed
      </p>
    </div>
  );
}
