import React from 'react';
import './App.css';
import { FaRegMessage } from 'react-icons/fa6';

function modal() {
  function submitForm() {}
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" name="" id="" />
      </form>
    </>
  );
}

function Header() {
  function handleClick() {}
  return (
    <header>
      <div>
        <h1>
          <FaRegMessage />
          react poster
        </h1>
      </div>

      <button onClick={handleClick}>new post</button>
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
