import { useState } from "react";


export default function Player() {
    const playerName =
    const [enteredPlayerName, setEnteredPlayerName] = useState(null);


  return (
    <div id="player">
      <h2>welcome  'unknown entity'</h2>
      <p>
        <input type="text"  />
        <button onClick={handleClick}>set name</button>
      </p>
    </div>
  );
}
