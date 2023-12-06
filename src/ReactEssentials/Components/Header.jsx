import React from 'react';
import mind from '../../assets/mind.png';
const reactDescription = ['Important', 'Crucial', 'Core'];

function displayRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[displayRandomIndex(2)];
  return (
    <div>
      <img style={{ width: '100px' }} src={mind} alt="mind--set" />
      <h2>react essentials</h2>
      <b>{description}:</b> react topics required to build any react app
    </div>
  );
}

export default Header;
