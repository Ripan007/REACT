import React from 'react';
import './index.css';
import ReactImage from './assets/couple.jpg';
import { CORE_CONCEPTS } from './data';
const reactDesc = ['xx', 'yy', 'zz'];

console.log(CORE_CONCEPTS[0].title);

function getRanInde(max) {
  console.log(Math.floor(Math.random() * (max + 1)));
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.descriptiion}</p>
    </>
  );
}
export default function App() {
  const descriptiion = reactDesc[getRanInde(2)];
  return (
    <>
      <img src={ReactImage} alt="couple-image" />
      <p> {descriptiion} show the output</p>
      <CoreConcepts title="xxx" descriptiion="lkkkkkkkkkk" />
    </>
  );
}
