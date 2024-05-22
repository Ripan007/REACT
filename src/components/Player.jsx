import React, { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true)

    }
let playerName =
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>edit</button>
      </span>
    </li>
  );
}
