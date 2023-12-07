import React, { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleEdit() {
    setIsEditing(false);
  }
  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input type="text" />}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>edit</button>
      </span>
    </li>
  );
}

export default Player;
