import React, { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import '../index.css';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';
export default function Main() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = 'please select a button';
  if (selectedTopic) {
    tabContent = (
      <div>
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <CoreConcept />
      <section id="core-concepts">
        {CORE_CONCEPTS.map(conceptItem => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </section>
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleSelect('components')}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          jsx
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
        >
          Prop
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
        >
          State
        </TabButton>
      </menu>
      <div id="tab-content">{tabContent}</div>
    </div>
  );
}


//   i am pretty happy because i am going  to react towards   my goal