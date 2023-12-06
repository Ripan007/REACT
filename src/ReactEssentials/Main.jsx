import React from 'react';
import Header from './Components/Header.JSX';
import CoreConcept from './Components/CoreConcept';
import CORE_CONCEPTS from './Components/data';
function Main() {
  return (
    <div>
      <Header />
      <CoreConcept concept={CORE_CONCEPTS} />
    </div>
  );
}

export default Main;
