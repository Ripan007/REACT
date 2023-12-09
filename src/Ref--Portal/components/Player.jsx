import React, { useState } from 'react';

export default function Player() {
  const [enterPlayerName, setEnterPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setEnterPlayerName(e.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>welcome {submitted ? enterPlayerName : 'unknown entity'} </h2>
      <p>
        <input type="text" value={enterPlayerName} onChange={handleChange} />
        <button onClick={handleClick}>set name</button>
      </p>
    </section>
  );
}
