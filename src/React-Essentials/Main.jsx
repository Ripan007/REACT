import React from 'react';

const reactDescription = ['fundamental', 'crucial', 'core'];
function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactDescription[getRandomIndex(2)];
  return (
    <header>
      <p>
        {description} react essentials concept are required for creating any
        react app
      </p>
    </header>
  );
}

export default function Main() {
  return (
    <div>
      <Header />
    </div>
  );
  }
