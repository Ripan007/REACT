import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept';
import CORE_CONCEPTS from './Components/data';
import TabButton from './Components/TabButton.jsx';
import Practice from './Practice/Practice.jsx';
import EXAMPLES from './datas.js';
function Main() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>please select a button</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="examples-content">
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
      />
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} />
      <section id="examples">
        <hr />
        <h2>examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}
          >
            Jsx
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default Main;
