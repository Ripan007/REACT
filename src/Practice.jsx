import React, { useState } from 'react';

function Practice() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  console.log(count);
  function handleClick() {
    setCount(c => c + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>next</button>
    </div>
  );
}

export default Practice;
