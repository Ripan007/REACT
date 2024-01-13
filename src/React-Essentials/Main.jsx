import React, { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import '../index.css';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';
export default function Main() {
  const[selectedTopic,setSelectedTopic] = useState('please select a topic')

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
        <TabButton onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
        <TabButton onSelect={() => handleSelect('prop')}>Prop</TabButton>
        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
      </menu>
      {}
    </div>
  );
}



//   in javascript  the  topic which i need to go through is function , array  , object , rest operator , array desttructing and  many more things , ultimately i want to say that javascriprt is reuiresf fpr react