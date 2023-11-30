import React from 'react';
import { useState } from 'react';

function Practice() {
  const [inputValue, setInputValue] = useState('');

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
        <input type="text"  ref={}/>
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

export default Practice;
