import React, { useRef, useState } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState('');
  function handleClick() {
    se;
  }
  return (
    <section id="player">
      <h2>welcome unknown entity</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>set name</button>
      </p>
    </section>
  );
}
