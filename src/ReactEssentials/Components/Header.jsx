import React from 'react';

const reactDescription = ['Important', 'Crucial', 'Core'];

function displayRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[displayRandomIndex[0]];
  return (
    <div>
      <h2>react essentials</h2>
      <b>{description}:</b> react topics required to build any react app
    </div>
  );
}

export default Header;
