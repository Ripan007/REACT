import React from 'react';

function Practice() {
  const [isDeleting, setIsDeleting] = useState(false);
  function proceedHandler() {
    setIsDeleting(true);
  }

  function deleteHandler() {
    setIsDeleting(false);
  }
  return (
    <div className="container">
      <div className="dialog__box">
        <h1>are you sure</h1>
        <button onClick={proceedHandler}>proceed</button>
      </div>
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
}

export default Practice;
