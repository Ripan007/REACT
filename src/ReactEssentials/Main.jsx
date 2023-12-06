import React from 'react';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept';
import CORE_CONCEPTS from './Components/data';
import TabButton from './Components/TabButton.jsx';
import Practice from './Practice/Practice.jsx';
function Main() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
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
          <TabButton onSelect={() => handleSelect('components')}>
            Components
          </TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
      </section>
    </div>
  );
}

export default Main;
