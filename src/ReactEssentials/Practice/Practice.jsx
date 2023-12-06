import React, { useState } from 'react';

function Practice() {
  const [isDeleting, setIsDeleting] = useState(false);
  function proceedHandler() {
    setIsDeleting(false);
  }

  function deleteHandler() {
    setIsDeleting(true);
  }

  let isWarning;

  if (isDeleting) {
    isWarning = (
      <div className="dialog__box">
        <h1>are you sure</h1>
        <button onClick={proceedHandler}>proceed</button>
      </div>
    );
  }
  return (
    <div className="container">
      {isWarning}
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
}

export default Practice;
