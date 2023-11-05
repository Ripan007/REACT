import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState(null);

  function handleClick() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <>
      <h1>{enterPlayerName ?? "default value"}</h1>
      <input type="text" ref={playerName} placeholder="enter player name" />
      <button onClick={handleClick}>set name</button>
    </>
  );
}
