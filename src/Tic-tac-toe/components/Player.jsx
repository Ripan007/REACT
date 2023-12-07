import React, { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" />;
  }
}
return (
  <li>
    <span className="player">
      {playerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>edit</button>
    </span>
  </li>
);

export default Player;
