import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleButton() {
    setIsEditing((prevState) => !prevState);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  let editPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <div id="player">
        {editPlayerName}

        <span className="player-symbol">{symbol}</span>
      </div>
      <button onClick={handleButton}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}
