import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>react poster</h1>

      <button>new post</button>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
