import React, { useState } from 'react';

function Practice() {
  const [show, setShow] = useState();
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
        <button>proceed</button>
      </div>
      <button>delete</button>
    </div>
  );
}

export default Practice;
