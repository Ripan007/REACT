import React, { useState } from 'react';
import './index.css';
import EXAMPLES, { CORE_CONCEPTS } from './data';

import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header';
import TabButton from './components/TabButton';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

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
        <div className="tab-content">
          <h1>{EXAMPLES[selectedTopic].title}</h1>
          <h2></h2>
          <pre>
            <code></code>
          </pre>
        </div>
      </section>
    </>
  );
}
