import React from 'react';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept';
import CORE_CONCEPTS from './Components/data';
import TabButton from './Components/TabButton.jsx';
function Main() {
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
        <h2>examples</h2>
        <TabButton>components</TabButton>
      </section>
    </div>
  );
}

export default Main;
