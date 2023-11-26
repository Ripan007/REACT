import React from 'react';

function Header() {
  return (
    <header style={header}>
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
