import React, { useState } from 'react';
import './index.css';
import EXAMPLES from './components/examples'
import { CORE_CONCEPTS } from './data';
import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header';
import TabButton from './components/TabButton';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState('click a button');
  let tabContent = 'please select a button';
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
🆒
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
        {selectedTopic}
      </section>
    </>
  );
}
