import React, { useState } from 'react';
import './index.css';
import { EXAMPLES, CORE_CONCEPTS } from './data';

import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header';
import TabButton from './components/TabButton';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <h2>{EXAMPLES[selectedTopic].description}</h2>
        <pre>
          <code> {EXAMPLES[selectedTopic].code} </code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section id="core-concepts">
        <h2>core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept_item, key) => (
            <CoreConcepts key={key} {...concept_item} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>examples</h2>
        <menu style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
          <TabButton
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}
          >
            components
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
            props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}
          >
            state
          </TabButton>
        </menu>

        {tabContent}
      </section>
    </>
  );
}
