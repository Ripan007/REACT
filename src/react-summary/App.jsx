import React from 'react';
import './App.css';
import { FaRegMessage } from 'react-icons/fa6';

function Header() {
  return (
    <header>
      <div>
        <h1>
          <FaRegMessage />
          react poster
        </h1>
      </div>

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
