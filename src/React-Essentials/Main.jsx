import React from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import  '../index.css'
import TabButton from './components/TabButton';
export default function Main() {
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
        <TabButton>Component</TabButton>
        <TabButton>Jsx</TabButton>
        <TabButton>Prop</TabButton>
        <TabButton>State</TabButton>
      </menu>
    </div>
  );
}
