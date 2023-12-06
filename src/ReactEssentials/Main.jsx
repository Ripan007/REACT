import React from 'react';
import Header from './Components/Header.JSX';
import CoreConcept from './Components/CoreConcept';
import CORE_CONCEPTS from './Components/data';
function Main() {
  return (
    <div>
      <Header />
      <CoreConcept
        title={CORE_CONCEPTS[0].title}
        desc={CORE_CONCEPTS[0].description}
      />
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} />
    </div>
  );
}

export default Main;
