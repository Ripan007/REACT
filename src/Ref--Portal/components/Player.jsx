import React, { useRef, useState } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState(null);
  function handleClick() {
    setEnterPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>welcome {enterPlayerName ?? 'unknown entity'} </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>set name</button>
      </p>
    </section>
  );
}
