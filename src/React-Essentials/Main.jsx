import React from 'react';

const reactDescription = ['fundamental', 'crucial', 'core'];
function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactDescription[getRandomIndex(2)];
  return (
    <header
      style={{
        backgroundColor: 'lightblue',
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: 23,
      }}
    >
      <img
        style={{ width: '100px', width: '100px' }}
        src="https://cdn.pixabay.com/photo/2014/09/19/05/29/person-451713_1280.jpg"
        alt="change"
      />
      <h1>react essentials</h1>
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
