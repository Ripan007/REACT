import React, { useState } from 'react';

function Practice() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // console.log(count);
  console.log(total);
  function handleClick() {
    setCount(c => c + 1);
    setCount(total * count);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>next</button>
      Total - {total}
    </div>
  );
}

export default Practice;
