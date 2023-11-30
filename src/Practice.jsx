import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function Practice() {
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef();
  console.log(inputRef);

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log('the press txt', inputValue);
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        name:
        {/* <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        /> */}
        <input
          type="text"
          ref={inputRef}
          onChange={e => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

export default Practice;
