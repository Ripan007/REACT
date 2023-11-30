import React from 'react';
import { useRef } from 'react';

function Practice() {
  const userInput = useRef();
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={userInput} />
    </form>
  );
}

export default Practice;
