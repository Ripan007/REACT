import React from 'react';
import './index.css';
import ReactImage from './assets/couple.jpg';
import { CORE_CONCEPTS } from './data';
const reactDesc = ['xx', 'yy', 'zz'];

function getRanInde(max) {
  // console.log(Math.floor(Math.random() * (max + 1)));
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts({ title, describe }) {
  return (
    <div
      style={{
        border: '1px solid black',
        maxWidth: '100px',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <h1>{title}</h1>
      <p>{describe}</p>
    </div>
  );
}
export default function App() {
  const descriptiion = reactDesc[getRanInde(2)];
  return (
    <>
      <img src={ReactImage} alt="couple-image" />
      <p> {descriptiion} show the output</p>
      <CoreConcepts {...CORE_CONCEPTS[0]} />
      <CoreConcepts {...CORE_CONCEPTS[1]} />
      <CoreConcepts {...CORE_CONCEPTS[2]} />
    </>
  );
}
