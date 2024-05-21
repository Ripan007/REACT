import React from 'react';
import './index.css';
import ReactImage from './assets/couple.jpg';
import { CORE_CONCEPTS } from './data';
const reactDesc = ['xx', 'yy', 'zz'];

function getRanInde(max) {
  // console.log(Math.floor(Math.random() * (max + 1)));
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props) {
  return (
    <div style={'border:1px solid black'}>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}
export default function App() {
  const descriptiion = reactDesc[getRanInde(2)];
  return (
    <>
      <img src={ReactImage} alt="couple-image" />
      <p> {descriptiion} show the output</p>
      <CoreConcepts
        title={CORE_CONCEPTS[0].title}
        desc={CORE_CONCEPTS[0].desc}
      />
    </>
  );
}
