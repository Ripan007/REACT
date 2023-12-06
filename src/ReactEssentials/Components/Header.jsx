import React from 'react';

const reactDescription = ['Important', 'Crucial', 'Core'];

function displayRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return <div>Header</div>;
}

export default Header;
