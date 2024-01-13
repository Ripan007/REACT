import React, { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import '../index.css';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';
export default function Main() {
  const[selectedTopic,setSelectedTopic] = useState('Components')

  function handleSelect(selectedButton) {
  setSelectedTopic(selectedButton)


  }


  console.log('render the component');

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
        <TabButton onSelect={() => handleSelect('components')}>
          Component
        </TabButton>
        <TabButton onSelect={() => handleSelect('JSX')}>jsx</TabButton>
        <TabButton onSelect={() => handleSelect('props')}>Prop</TabButton>
        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
      </menu>
      <div id="tab-content">
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    </div>
  );
}



