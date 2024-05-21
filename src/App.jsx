import React from 'react';
const reactDesc = ['xx', 'yy', 'zz'];

function getRanInde(max) {
  console.log(Math.floor(Math.random() * (max + 1)));
  return Math.floor(Math.random() * (max + 1));
}

export default function App() {
  return (
    <>
      <p> {reactDesc[getRanInde(2)]} show the output</p>
    </>
  );
}
