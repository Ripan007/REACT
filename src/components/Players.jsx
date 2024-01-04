import React, { useRef, useState  ,StyleSheet} from 'react';

export default function Players() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredplayerName] = useState(null);

  function handleClick() {
    setEnteredplayerName(playerName.current.value);
  }

  return (
    <>
      <section id="player">
        <h2>welcome {enteredPlayerName ?? 'unkown entity'}</h2>
        <p>
          <input type="text " ref={playerName} />
          <button onClick={handleClick}>set name</button>
        </p>
      </section>
    </>
  );
}

