import React from 'react';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(0);

  function clickHandler() {
    setInputValue(inputValue + 1);
  }
  return (
    <div>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} placeholder="enter some value" />
      <button onClick={clickHandler}> +</button>
    </div>
  );
}

export default App;
