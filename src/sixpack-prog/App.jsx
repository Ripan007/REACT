import React from 'react';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <input type="text" value={inputValue} />
    </div>
  );
}

export default App;
