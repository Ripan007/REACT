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
        desc={CoreConcept[0].description}
      />
    </div>
  );
}

export default Main;
