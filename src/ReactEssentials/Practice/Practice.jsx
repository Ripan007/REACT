import React, { useState } from 'react';

function Practice() {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState();

  function handleDelete() {
    setShow(false);
  }

  function handleProcced() {}
  return (
    <div>
      {!show ? (
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
          <button onClick={handleProcced}>proceed</button>
        </div>
      ) : null}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default Practice;
