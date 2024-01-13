import React from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import  '../index.css'
import TabButton from './components/TabButton';
export default function Main() {
  function handleSelect(selectedButton){
    console.log(selectedButton);
  }

  console.log('app content');
  return (
    <div>
      <Header />
      <CoreConcept />
      <section id="core-concepts">
        <CoreConcept {...CORE_CONCEPTS[0]} />
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} />
      </section>
      <menu>
        <TabButton onSelect={()=>handleSelect('components')}>Component</TabButton>
        <TabButton onSelect={()=>handleSelect('jsx')}>Jsx</TabButton>
        <TabButton onSelect={()=>handleSelect('prop')}>Prop</TabButton>
        <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
      </menu>
    </div>
  );
}
