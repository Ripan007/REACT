import React, { useState } from 'react';

export default function Players() {
  const [enteredPlayerName, setEnteredplayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setEnteredplayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true)
  }

  return (
    <>
      <section id="players">
        <h2>welcome {submitted ? enteredPlayerName : 'unkown entity'}</h2>
        <p>
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>set name</button>
        </p>
      </section>
    </>
  );
}
