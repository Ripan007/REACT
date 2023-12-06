import React from 'react';

function Header() {
  const reactDescription = ['Fundamental', 'Crucial', 'Core'];

  function getRandomIndex(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = reactDescription[getRandomIndex(2)];

  return (
    <header>
      <h1>react essentials</h1>
      <b>{description}</b> : react concept require to build any react app
    </header>
  );
}

function CoreConcept() {
  return (
    <main>
      <h2>react coreConcepts</h2>
    </main>
  );
}

function Main() {
  return (
    <div>
      <Header />
      <CoreConcept title={''} />
      <CoreConcept />
      <CoreConcept />
      <CoreConcept />
    </div>
  );
}

export default Main;
