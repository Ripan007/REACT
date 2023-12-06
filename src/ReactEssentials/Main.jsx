import React from 'react';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Main() {
  const description = reactDescription[getRandomIndex(2)];
  return (
    <div>
      <b>{description}</b> : react concept require to build any react app
    </div>
  );
}

export default Main;
