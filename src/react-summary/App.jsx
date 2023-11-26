import React from 'react';
import './App.css';
import { FaRegMessage } from 'react-icons/fa6';

function Modal() {
  function submitForm() {}
  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="">text</label>
        <textarea></textarea>
        <label>your name</label>
        <input type="text" />
      </form>
    </>
  );
}

function Header() {
  function handleClick() {
    setModal(true);
  }
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
  const [modal, setModal] = usesState(false);
  return (
    <>
      <Header />
      {modal ? <Modal /> : ''}
    </>
  );
}

export default App;
