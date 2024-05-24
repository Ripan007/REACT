import { useRef, useState } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <div id="player">
      <h2>welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>set name</button>
      </p>
    </div>
  );
}
