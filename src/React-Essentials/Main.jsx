import React from 'react';
import { CORE_CONCEPTS } from './data';

const reactDescription = ['fundamental', 'crucial', 'core'];
function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactDescription[getRandomIndex(2)];
  return (
    <header>
      <p>
        {description} react essentials concept are required for creating any
        react app
      </p>
    </header>
  );
}

function CoreConcept({title,description}){
  return(
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default function Main() {
  return (
    <div>
      <Header />
      <section id='core-concepts'>
        <CoreConcept  {...CORE_CONCEPTS[0]}/>
        <CoreConcept  {...CORE_CONCEPTS[1]}/>
        <CoreConcept  {...CORE_CONCEPTS[2]}/>
        <CoreConcept  {...CORE_CONCEPTS[3]}/>
      </section>
    </div>
  );
  }
