import React from 'react';
import { useRef } from 'react';

function Practice() {
  const userInput = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    console.log('user_input--value:', userInput.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={userInput} />
      <button type="submit">submit</button>
    </form>
  );
}

export default Practice;
