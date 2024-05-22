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

  return (
    <>
      <Header />
      <section>
        <CoreConcepts {...CORE_CONCEPTS[0]} />
        <CoreConcepts {...CORE_CONCEPTS[1]} />
        <CoreConcepts {...CORE_CONCEPTS[2]} />
      </section>
      <section id="examples">
        <h2>examples</h2>
        <menu style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
          <TabButton onSelect={() => handleSelect('components')}>
            components
          </TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>jsx</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>state</TabButton>
        </menu>
        {!selectedTopic ? (
          <p>please select a topic</p>
        ) : (
          <div className="tab-content">
            <h1>{EXAMPLES[selectedTopic].title}</h1>
            <h2>{EXAMPLES[selectedTopic].description}</h2>
            <pre>
              <code> {EXAMPLES[selectedTopic].code} </code>
            </pre>
          </div>
        )}
      </section>
    </>
  );
}

//  more readable is much  more important the shorter syn
