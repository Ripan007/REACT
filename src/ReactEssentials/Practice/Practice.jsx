import React, { useState } from 'react';

function Practice() {
  const [show, setShow] = useState();
  const [hide, setHide] = useState();

  function handleDelete() {}
  return (
    <div>
      <div
        style={{
          background: 'red',
          padding: '1rem',
          maxWidth: '100px',
          margin: '1rem',
        }}
        className="content"
      >
        <p>Lorem, ipsum dolor.</p>
        <button onClick={handleProced}>proceed</button>
      </div>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default Practice;
